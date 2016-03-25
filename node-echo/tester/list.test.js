var ME = require('../lib/mouseEvent');
var PU = require('../phantom/PUnits');
module.exports = function(page, spawn, fs) {
//    console.log(assert.equal('2015/12/05~','22');
    PU.delayRender({
        ele : 'J_mainKey',
        eventType: 'innerText',
        textValue: 'my first lady'
    }).setOtherCommands(function(hasTip,self){
//                console.log(hasTip);
                var child = self.spawnSugar(['mocha-phantomjs','-R','json','tester/index.html']);
//                var child = self.spawnSugar(['mocha','lib/mocha/testMocha.js','--reporter','mochawesome']);
//                console.log(child);
//                
                child.stdout.on('data',function(data){
                    if(!hasTip){
//                        console.log('begin mochawesome !!!');
                        console.log('====================mocha-phantomjs begin======================');
//                        console.log(data);
                        fs.write(mp,data);
                        self.handlerMPJSON(data);
                    }
                    hasTip = true;
                });
                child.stderr.on('data',function(data){
                    console.log(data);
                });
                child.on('exit', function() {
//                    console.log('mochawesome complete !!!');
                    console.log('====================mocha-phantomjs complete====================');
                    phantom.exit();
                });
//                self.spawnSugar(['start','png']);
                fs.write(tx, page.content);
//                phantom.exit();
    }).shutDown();
//    .delayRender({
//        ele:'J_Onmousetr',
//        eventType:'dblclick'
//    }).delayRender({
//        ele:'J_Onmousetr',
//        eventType:'click'
//    }).delayRender({
//        ele:'J_dialogMini',
//        eventType:'click'
//    }).delayRender({
//        ele:'J_tabNav2',
//        eventType:'click'
//    })
    var clearPng = PU.spawnSugar(['del','png\\*.png']);
    clearPng.stderr.on('data',function(data){
        console.log(data);
    });
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/A' + png);
//        }, 500);
//    },300)
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','dblclick');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/B' + png);
//        }, 500);
//    }, 1500);
//    fs.write(tx, page.content);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogClose','click');
//            bindEvent('J_Onmousetr','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/C' + png);
//        },500);
////        loadOver = true;
//    },3000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','dblclick');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/D' + png);
//        },500);
////        loadOver = true;
//    },4000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogMini','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/E' + png);
//        },500);
////        loadOver = true;
//    },5000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogRestore','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/E2' + png);
//        },500);
////        loadOver = true;
//    },6000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_tabNav2','click');
////            bindEvent('J_dialogMini','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/F' + png);
//        },500);
//        loadOver = true;
//    },7000);
//    
//    window.setInterval(function(){
//        if(loadOver){
//            console.log('over');
//            //mocha
//            var child = spawn('cmd.exe',['/s','/c','mocha','lib/mocha/testMocha.js','--reporter','mochawesome']);
//            child.stdout.on('data',function(data){
//                console.log('mochawesome down');
//                phantom.exit();
//            });
//            spawn('cmd.exe',['/s','/c','start','png']);
//        } else {
//            console.log(loadOver);
//        }
//    },1000);
}