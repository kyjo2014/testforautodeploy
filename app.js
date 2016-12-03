const http = require("http");
        http .createServer(function(req,res){
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("Hello world! myfriend");


        }).listen(80);

        console.log("running at 800");
