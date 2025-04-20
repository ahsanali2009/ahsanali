var http = require('http')
const {blogData} = require('./data.js')

http.createServer((req, res) => {
    if(req.url == "/" && req.method === "GET"){
        try {
            console.log("api hit")
            res.write(JSON.stringify(blogData))
            res.end()
        } catch (error) {
            // console.log(error)
        }
    }

}).listen(8000)