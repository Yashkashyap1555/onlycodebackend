const newUser = require("../models/newusermodel");
const userregister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(403).json({
        message: "please fill all detail",
      });
    }

    const exisitingUser = await newUser.findOne({ email: email });
    if (exisitingUser) {
      return res.status(403).json({
        message: "this user already register please login",
      });
    }

    const userdetail = await newUser.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(201).json({
      message: "newUser register successfully",
      data: userdetail,
    });
  } catch (error) {
    // console.log(error.message)
    res.status(404).json({
      message: error.message,
    });
  }
};
const getAllUser = async (req, res) => {
  try {
    const allUser = await newUser.find({});
    if (allUser?.length === null) {
      res.status(403).json({
        message: "your database is empty",
      });
    }
    res.status(200).json({
      message: "data retrived success",
      data: allUser,
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const userDelete = async (req, res) => {
  const { _id } = req.params;
  console.log(_id , "id")
  try {
    const list = await newUser.findByIdAndDelete({ _id : _id});
    if (list) {
      return res.status(200).json({
        message: "your data delete successful",
      });
    }
    
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getOwnProfile = () => {

}

module.exports = {
  userregister,
  getAllUser,
  userDelete,
  getOwnProfile
};
