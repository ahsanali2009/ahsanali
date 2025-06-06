var http = require('http');
require('dotenv').config()

const mainDB = require('./db.js');


let generatePath = (Math.random()*1000).toFixed(0)

http.createServer( async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url == "/" && req.method === "GET"){
        
            res.write("/home");
            res.end();
            
        } else if(req.url == '/api/admin' && req.method == "GET"){
            
                res.write( JSON.stringify({
                    password : process.env.PASSWORD,
                }) )
                res.end()

    } else if(req.url === "/api/admin/generate_path" && req.method === "GET"){

        res.write(JSON.stringify(
            {
                path : `${generatePath}`
            }
        ))
        res.end()


    } else if(req.url === `/api/admin/upload` && req.method === "POST"){

        let chunks = []


        req.on('data', (chunk) => {
            chunks.push(chunk)            
        })

        req.on('end', () => {
            const data = Buffer.concat(chunks)

            let JSONData = JSON.parse(data.toString()) 
            console.log(JSONData)

            mainDB('post_blog', JSONData['title'], JSONData['blog_content'], JSONData['title'].replace(/ /g, '+'))

            res.write(data)
            res.end()
        })

    } else if(req.method === "GET" && req.url === "/api/get/blogs"){
     
        let fetchAllBlogs = await mainDB('get_blogs')

        console.log(fetchAllBlogs)

        res.write(JSON.stringify({fetchAllBlogs}))
        res.end()

    }


}).listen(8000)