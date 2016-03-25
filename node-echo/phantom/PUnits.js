require('lodash');
var md555 = require("md5");
module.exports = {
    config:{
        parentTime: 1000,//任务间隔
        childTime: 500,//截图动作间隔
        queue: [],//任务队列
        timer: window.setTimeout(function(){},0),//时间控制器
        otherCommands: function(){}//所有截图任务完成后要执行的辅助命令，如打开对应的png文件夹进行mocha测试等
    },
    /**
    * @parameter ele
    * @parameter eventType
    * @parameter imgSuffix
    * @parameter parentTime
    * @parameter childTime
    * @parameter imgDir
    */
    delayRender: function(args){
//        if(!args){ 
//            this.endPhantom('you must put in more arguments');
//        }
//        if(!args.ele){ 
//            this.endPhantom('you must assign a document element');
//        }
        var _args = {
            ele : '',
            eventType: '',
            imgSuffix : '.png',
            imgDir : './png/',
            imgName : md555(new Date().getTime()) + Math.round(Math.random(1,1000)*1000),
            parentTime: this.config.parentTime,
            childTime: this.config.childTime
        };
        if(args){
            _args = {
                ele : args.ele ? args.ele : _args.ele,
                eventType: args.eventType ? args.eventType : _args.eventType,
                imgSuffix : args.imgSuffix ? args.imgSuffix : _args.imgSuffix,
                imgDir : args.imgDir? args.imgDir : _args.imgDir,
                imgName : args.imgName ? args.imgName : _args.imgName,
                parentTime: args.parentTime ? (args.parentTime, this.config.parentTime = args.parentTime) : this.config.parentTime,
                childTime: args.childTime ? args.childTime : this.config.childTime
            };
            _.assign(_args,args);
        }
//        console.log(JSON.stringify(_args));
//        console.log(this.config.timer);
        var self = this;
        (function(t){
            self.config.timer = window.setTimeout(function(){
                if(_args.eventType){
//                    console.log(JSON.stringify(_args));
                    switch(_args.eventType){
                        case 'innerHTML':
                            var tt = page.evaluate(function(args){
                                if(document.getElementById(args.ele)){
                                    document.getElementById(args.ele).innerHTML = args.htmlValue;
                                } else {
                                    throw 'unfind '+args.ele;
                                }
                            },_args);
                            break;
                        case 'innerText':
                            var tt = page.evaluate(function(args){
                                if(document.getElementById(args.ele)){
                                    document.getElementById(args.ele).value = args.textValue;
                                } else {
                                    throw 'unfind '+args.ele;
                                }
                            },_args);
                            break;
                        default:
                            var tt = page.evaluate(function(args){
                                function bindEvent(id, type){
                                    var btn = document.getElementById(id);
                                    if(btn){
                                        var event = document.createEvent("MouseEvents");
                                        event.initMouseEvent(type, true, true, document.defaultView, 0, 0, 0, 0, 0,false, false, false, false, 0, null);    
                                        btn.dispatchEvent(event);
                                    } else {
                                        throw 'unfind '+id;
                                    }
                                }
                                bindEvent(args.ele,args.eventType);
                            }, _args);
                            break;
                    }
                }
//                self.config.queue.push(t);
//                console.log('begin queue:',self.config.queue.toString());
                window.setTimeout(function(){
                        page.render(_args.imgDir + _args.imgName + _args.imgSuffix);
//                        console.log('t :',t);
//                        console.log('t index:',_.indexOf(self.config.queue,t));
                        if(_.indexOf(self.config.queue,t)>-1){
                            _.remove(self.config.queue, function(n){
                                return n==t;
                            });
                        } else {
                            
                        }
//                        console.log('end queue:',self.config.queue.toString());
                }, _args.childTime);
//                console.log(self.config.queue);
            },_args.parentTime);
//            console.log('why',self.config.timer);
        })(self.config.timer == 0 ? 1 : ++self.config.timer);
        
//        console.log('delayRender' + self.config.timer);
        this.config.queue.push(self.config.timer);
        this.config.parentTime += 1200;
        return this;
    },
    /**
    * 设置在最终退出前要执行的额外命令
    */
    setOtherCommands:function(cmd){
        if(cmd){
            this.config.otherCommands = cmd;
        }
        return this;
    },
    getOtherCommands:function(){
//        console.log(this.config.otherCommands);
        return this.config.otherCommands;
    },
    /**
    * 最终退出方法，不过退出语句由用户决定写在何处，这里要优化
    */
    shutDown:function(){
        var self = this;
        window.setInterval(function(){
            var hasTip = false;
//            console.log(self.config.queue.join('||'));
            if(self.config.queue.length==0){
//                console.log('over');
                (self.getOtherCommands())(hasTip,self);
            } else {
                console.log('remain [',self.config.queue.length,'] renders, sao an wu zao...');
            }
        },1000);
    },
    /**
    * 打印console并退出phantomjs
    */
    endPhantom:function(msg){
        console.log(msg);
        phantom.exit();
    },
    /**
    * spawn 门面方法for windows
    */
    spawnSugar:function(opt){
        return spawn('cmd.exe',(['/s','/c'].concat(opt)));
    },
    /**
    * 处理mp(mocha-phantomjs) 执行后的json数据：
    * {
    *   "stats": {
    *     "suites": 2,
    *     "tests": 2,
    *     "passes": 2,
    *     "pending": 0,
    *     "failures": 0,
    *     "start": "2016-03-25T07:03:05.831Z",
    *     "end": "2016-03-25T07:03:05.840Z",
    *     "duration": 9
    *   },
    *   "tests": [
    *     {
    *       "title": "is blue",
    *       "fullTitle": "StringCalculator body background is blue",
    *       "duration": 4,
    *       "currentRetry": 0,
    *       "err": {}
    *     }
    *   ],
    *   "pending": [],
    *   "failures": [],
    *   "passes": [
    *     {
    *       "title": "is blue",
    *       "fullTitle": "StringCalculator body background is blue",
    *       "duration": 4,
    *       "currentRetry": 0,
    *       "err": {}
    *     }
    *   ]
    * }
    * 可提取覆盖率、失败/成功比例、失败提示等信息
    */
    handlerMPJSON:function(obj){
        var obj = JSON.parse(obj);
        var tipsConfig = {
            "suites" : "单元总数",
            "tests" : "用例总数",
            "passes" : "通过用例",
            "pending" : "待定用例",
            "failures" : "失败用例",
            "start" : "开始时间",
            "end" : "结束时间",
            "duration" : "耗时",
            "defaultTip" : ""
        };
        for(var i in obj.stats){
            if(_.indexOf(['start','end'], i) > -1){
                continue;
            }
            tipsConfig.defaultTip = tipsConfig[i] + "==>" + obj.stats[i];
            console.log(tipsConfig.defaultTip);
        }
        console.log('测试通过率==>',obj.stats.passes,'/',obj.stats.tests,'[' + ((obj.stats.passes / obj.stats.tests) * 100) + '%]');
        console.log('测试失败案例↓');
        for(var i in obj.failures){
            console.log('>>>>>>');
            console.log('案例标题==>',obj.failures[i].fullTitle);
            console.log('错误概述==>',obj.failures[i].err.message);
            console.log('<<<<<<');
        }
    },
    log:function(){
            
    }
    
}
