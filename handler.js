var fs = require('fs');
function homeHandler(res){
    console.log('Serving Home Page');
    fs.readFile('index.html',function(err,data){
        if(err){
            console.log(err);
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end();
    })
    
}
function aboutusHandler(res){
    console.log('Serving About Us Page');
    fs.readFile('about.html',function(err,data){
        if(err){
            console.log(err);
        }
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        res.end();
    })
}

exports.home = homeHandler;
exports.aboutus = aboutusHandler;