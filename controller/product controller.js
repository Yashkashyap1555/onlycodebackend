const userproduct = require("../models/productmodel");
const productuser = async (req, res) => {
  // res.status.send("yash")
  try {
    const { name, amount, description } = req.body;

    if (!name || !amount || !description) {
      return res.status(403).json({
        message: "please fill all detail",
      });
    }
    const newproduct = await userproduct.create({
      name: name,
      amount: amount,
      description: description,
    });
    res.status(201).json({
      message: "product file all detail",
      data: newproduct,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const allproduct = await userproduct.find({});
    //( ?. condition checker) to data is store in allproduct
    if (allproduct?.length === 0) {
      return res.status(404).json({
        message: "database is empty",
      });
    }
    res.status(200).json({
      message: "all data retrived ",
      //this data key is set on the data in respone and Postman data//
      data: allproduct,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
const productDeleteById = async (req, res) => {
  const { name } = req.body;
  try {
    const myList = await userproduct.findOneAndDelete({ name: name });
    if (myList) {
      return res.status(200).json({
        message: "your data has been successfully deleted",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const getProductId = async (req, res) => {
  try {
    const { id } = req.body;
    const productId = await userproduct.findById({ _id: id });
    // console.log(productId, "productId");
    if (productId === null) {
      return res.status(404).json({
        message: "your productId not found",
      });
    }

    res.status(200).json({
      data: productId,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  productuser,
  getAllProduct,
  productDeleteById,
  getProductId,
};
