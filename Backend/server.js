var http = require('http');
require('dotenv').config()

http.createServer( async (req, res) => {
    if(req.url == "/" && req.method === "GET"){
        
            console.log("api hit")
            res.write("HELLO WORLD");
            res.end();
            
        } else if(req.url == '/admin' && req.method == "GET"){
            
            console.log("api hit")
                res.write( JSON.stringify({
                    password : process.env.PASSWORD}) )
                res.end()
    }


}).listen(8000)