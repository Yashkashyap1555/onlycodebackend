const express = require("express")
const router2 = express.Router();

const userblog = require("../controller/blogcontroller");
router2.post("/userblog", userblog.blogController)

module.exports = router2;
