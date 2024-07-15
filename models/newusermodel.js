const mongoose = require("mongoose")
const newUserSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
})

const newUser = mongoose.model("newUser", newUserSchema)
module.exports = newUser