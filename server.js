var express = require('express'),
    server = express();

server.use(express.static(__dirname+"/css"));

server.get('/', function(req, res){
        res.sendFile('html/index.html', { root: __dirname });
});

server.get('/menu', function(req, res){
        res.sendFile('html/about.html', { root: __dirname });

});

server.get('/videos', function(req, res){
        res.sendFile('html/videos.html', { root: __dirname });
});

server.get('/about', function(req, res){
       res.sendFile('html/about.html', { root: __dirname });
});

//the following actually starts our server
server.listen(9090, function(){
    console.log("Now listening on port 9090")
});
