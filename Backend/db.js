const mongoose = require('mongoose')
const createNewBlog =  require('./createNewBlog.js')

const getAllBlogs = require('./getBlogs.js')


module.exports = async function mainDB(usecase, title, blog_content, path){
    await mongoose.connect("mongodb://localhost:27017/ahsanali")
    
    
    switch (usecase) {
        case 'post_blog':
                createNewBlog(title, blog_content, path)
                break;
        case 'get_blogs':

                return getAllBlogs()
                break ;
        }
    
}