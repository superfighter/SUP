/**
* 产品列表单元测试
**/
var assert = require("assert");
var cheerio = require("cheerio");
var fs = require("fs");
//读取phantomjs 执行后的html源码
var $;
var data = fs.readFileSync('doc/list.doc.txt','utf8');
$ = cheerio.load(data);
describe('筛选区交互',function(){
    it('选择开始时间', function(){
//        $('#J_begin').val('2015/12/05');
        assert.equal('2015/12/05~',$('#J_begin').val());
    })
    it('选择结束时间', function(){
        assert.equal('2016/01/15',$('#J_end').val());
    })
    it('选择监管机构', function(){
        assert.equal('1',$('#J_controlOrganization').val());
    })
    it('选择基础资产类型', function(){
        assert.equal('1',$('#J_baseAssets').val());
    })
    it('填写关键字', function(){
//        $('#J_mainKey').val(222);
        assert.equal('',$('#J_mainKey').val());
    })
    it('查找', function(){
        
    })
    it('还原', function(){
        
    })
})
//var jsdom = require("jsdom");
// 
//jsdom.env(
//  '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
//  ["http://code.jquery.com/jquery.js"],
//  function (errors, window) {
//    console.log("contents of a.the-link:", window.$("a.the-link").text());
//  }
//);