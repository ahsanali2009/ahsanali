const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        title : String,
        blog_content : String,
        postedOn : {
            type : Date,
            default : Date.now()
        },
        
        path : String
    }
)

module.exports = mongoose.model("blog", blogSchema)