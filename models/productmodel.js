const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name : {
        type : "string",
    },
    amount : {
        type : Number,
    },
    description :{
        type : "string",
    },

})
const product =  mongoose.model("userproduct", productSchema);
module.exports = product;