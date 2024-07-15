const userDetail = require("../models/usermodels");
//{*****************this is register api creating*********************}
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phonenumber, address } = req.body;
    if (!name || !email || !password || !phonenumber) {
      return res.status(403).json({
        message: "please fill all detail",
      });
    }
    // (.fineOne) is a mongodb method//
    // this method to find the same email id//
    const existingUser = await userDetail.findOne({ email: email });
    if (existingUser) {
      return res.status(403).json({
        message: "you are already registred please login ",
      });
    }
    // (.create) is a mongodb method //
    // this method to create the userdata in database//
    const newUser1 = await userDetail.create({
      name: name,
      email: email,
      password: password,
      phonenumber: phonenumber,
      address: address,
    });
    res.status(201).json({
      message: "congrates you have successfully registred",
      data: newUser1,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// the (getAllUsers) is api creating//
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userDetail.find({});
    if (allUsers?.length === 0) {
      return res.status(404).json({
        message: "db is empty",
      });
    }
    res.status(200).json({
      message: "data get ",
      data: allUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// the (getOwnProfile) is api creating//
const getOwnProfile = async (req, res) => {
  const { id } = req.body;
  try {
    // this (.findOne) is a method of mongodb database to find the data in database//
    // and required to parameter ({...}) then you will destructured in (req.body)//
    const myData = await userDetail.findOne({ _id: id });
    if (myData === null) {
      return res.status(404).json({
        message: "you are not registerd",
      });
    }
    // this line to remove the data in postman to don't show data in user//
    myData.password = undefined;
    myData.email = undefined;
    myData.__v = undefined;

    res.status(200).json({
      data: myData,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getOneProfileId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, "id")
    const userId = await userDetail.findOne({ _id: id });
    if (userId === null) {
   
      return res.status(404).json({
        message: "your id not found",
        
      });
    }
    res.status(200).json({  
      data: userId,
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// const getallUserDelete = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const myList = await userDetail.findByIdAndDelete({ name: name });
//     if (myList?.length >= 1) {
//       res.status(403).json({
//         message : "this name is already register"
//       })
//     }
//   } catch (error) {
//     res.status(403).json({
//       message: error.message,
//     });
//   }
// };

module.exports = {
  registerUser,
  getAllUsers,
  getOwnProfile,
  // getallUserDelete,
  getOneProfileId,
};
