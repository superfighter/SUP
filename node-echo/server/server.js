var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('./mime').types;
var conf = {
    'port':'8822'
};
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' recieved');
    var ext = path.extname(pathName);
//    console.log(ext);
    ext = ext ? ext.slice(1) : 'unknown';

    var contentType = mime[ext] || "text/html";
    var realPath = '';
    if(pathName.indexOf('\.') > -1){
        realPath = 'template/' + pathName.substr(1);  
    } else {
        realPath = 'template/' + pathName.substr(1) + '.html';   
    }
    fs.readFile(realPath, function(err, data){
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-Type':'text/html'});
            response.write('<div style="color:#FF0000">not found file ' + pathName.substr(1) + '</div>');
        } else {
            response.writeHead(200, {'Content-Type':contentType});
            response.write(data.toString());
        }
        response.end('file '+ pathName.substr(1) +' render over');
    });
}).listen(conf.port);
console.log('server start');