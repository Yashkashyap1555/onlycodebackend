const express = require("express");
const router = express.Router();

const user1 = require("../controller/usercontroller")
router.post("/register", user1.registerUser)
router.get("/userdetail",user1.getAllUsers)

router.get("/profile/:id",user1.getOneProfileId)


module.exports = router;
