var server = require('./simpleServer');
var router = require('./router');
var handler = require('./handler');

var handle = {
    "/": handler.home,
    "/home" : handler.home,
    "/about" : handler.aboutus
}
server.server(handle,router.route);