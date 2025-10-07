const mongoose = require('mongoose')
const createNewBlog =  require('./createNewBlog.js')

const getAllBlogs = require('./getBlogs.js')


module.exports = async function mainDB(usecase, title, blog_content, path){
    await mongoose.connect(process.env.MONGO_URI) //"mongodb://localhost:27017/ahsanali"
    .then(() => {console.log("MongoDB connected successfully")})
    .catch((err) => {console.log("Connection Error", err)})     
    
    switch (usecase) {
        case 'post_blog':
                createNewBlog(title, blog_content, path)
                break;
        case 'get_blogs':

                return getAllBlogs()
                break ;
        }
    
}