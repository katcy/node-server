function route(handle,pathname,res){
    if(typeof(handle[pathname]) === 'function'){
        handle[pathname](res);
    }else{
        console.log('404 Not Found ' + pathname);
    }
}

exports.route = route;