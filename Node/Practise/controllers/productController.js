const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts || allProducts.length === 0) {
      return res.status(404).json({
        message: "No Products Found",
      });
    } 

    

    res.status(200).json({
      status: "success",
      products: allProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message, // optional for debugging
    });
  }
};

const createProducts = async (req,res) => {
  try {
    console.log(req.body)
    const { name, price, description, category } = req.body;
    const newProduct = { name, price, description, category };
    await newProduct.save();
    res.status(200).json({
      Product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message, // optional for debugging
    });
  }
};



module.exports = { getProducts, createProducts };
