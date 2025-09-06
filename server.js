const http = require('node:http'); //if it is core module we can use :node

const server =  http.createServer(function(req, res){
    //reply to the with hello world
    if(req.url === '/getSeceretServer'){
        // res.write('this is seceret data');
         res.end('this is seceret data');
    }
    res.end('hello world'); 
});

server.listen(4444);