module.exports = async function getAllBlogs(){

    const Blog = require('./models/blogModel.js')
    let response = await Blog.find({})
    return response ;

    }