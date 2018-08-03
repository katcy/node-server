//Basic HTML Server
/*
*
*/
// var http = require("http");
// var fs = require("fs");
// var server = http.createServer(function(req,res){
//     fs.readFile('index.html',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(data);
//     res.end();
//     });
//     console.log('server running....')
// });
// server.listen(8080);

/*---------------------------------------------------------*/

var http = require('http');
var url = require('url');


function server(handle,route){
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;
        route(handle,pathname,res);

    }
    http.createServer(onRequest).listen(8080);
}
exports.server = server;