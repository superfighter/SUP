var page = require('webpage').create();
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var fs = require('fs');
var system = require('system');
var args = system.args;
var ME = require("../lib/mouseEvent");
//console.log(args[1]);
if(!args[1]){
    throw 'no args[1]';
}
phantom.outputEncoding="utf-8";
//console.log();
//var iconv = require('iconv-lite');
var tx = 'doc/list.doc.txt';
var mp = 'doc/mp.js';
//var png = new Date().getTime() + '.png';
// fs.write(tx,'','w');
//page.onResourceRequested=function(data){
////    console.log('requested');
//    var txc = fs.read(tx);
//    if(data.url.indexOf('.js')>0){
//        fs.write(tx, txc + '\nrequested==>' + JSON.stringify(data.url), 'w');
//    }
//}
//page.onResourceReceived=function(data){
////    console.log('received');
//    var txc = fs.read(tx);
//    if(data.url.indexOf('.js')>0){
//        fs.write(tx, txc + '\nreceived==>' + JSON.stringify(data.url), 'w');
//    }
//}
page.onConsoleMessage = function(data){
    console.log(data);
}
//var loadOver = false;
//page.open('http://yfbft.10jqka.com.cn/thsft/iFindService/CellPhone/i-strategy/question-area?postid=56234906', function(status){
page.open(args[1], function(status){
    var testCode = require('../tester/list.test');
    testCode(page, spawn, fs);
})