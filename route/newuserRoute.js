const express = require("express");
const router = express.Router();

const user1 = require("../controller/newusercontroller")

router.post("/newuserregister", user1.userregister)
router.get("/getalluser", user1.getAllUser)
router.delete("/userdelete/:_id", user1.userDelete)
router.get("/")

module.exports = router;
