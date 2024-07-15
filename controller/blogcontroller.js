const blog = require("../models/blogmodels")
const blogController = async(req, res)=>{

const {title, description, creator} = req.body

    const newBlogUser = await blog.create({
        title : title,
        description : description,
        creator : creator,

    })
    res.status(201).json({
        message : "you created blogchannel",
        data : newBlogUser,
    })

}

module.exports = {
    blogController
};
