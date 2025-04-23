async function createNewBlog(title, blog_content, path){
    const blog = require('./models/blogModel.js')
    let newBlog = new blog(
        {
                title: title,
                blog_content: blog_content,
                postedOn: new Date(),
                path: path,
        }
    )

    await newBlog.save()
}

module.exports = createNewBlog