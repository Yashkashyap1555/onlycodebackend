const express = require("express")
const router1 = express.Router();

const userproduct = require("../controller/product controller")
router1.post("/productuser", userproduct.productuser)
router1.get("/allproduct", userproduct.getAllProduct)
router1.delete("/productdelete", userproduct.productDeleteById)
router1.get("/productId", userproduct.getProductId)


module.exports  = router1;