const mongoose = require("mongoose")
const blogUser = new mongoose.Schema({
        title : {
            type : String,
        },
        description : {
            type : String,
        },
        creator : {
            type : String,
        },
    })

const blog = mongoose.model("blog", blogUser)
module.exports = blog;
