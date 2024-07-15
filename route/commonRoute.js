const express = require("express");
const router = express.Router();
const userRouter = require("./userroute");
const productRouter = require("./productroute");
const blogRouter = require("./blogroute");
const newUserRouter = require("./newuserRoute");

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/blog", blogRouter);
router.use("/newuser", newUserRouter);

module.exports = router;
