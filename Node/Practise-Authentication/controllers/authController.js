const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    //1>>>check mail and pass is filled
    if (!email || !password) {
      req.status(400).json({
        status: "failed",
        message: "Please enter both mail & password",
      });
    }
    //2>>>>>Check if user exist or not
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }
    // 3>>>>generate token
    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    //send token in cookie
    res.cookie("token", token);
    res.status(200).json({
      status: "success",
      message: "login Success",
      token,
    });
  } catch (error) {
    
    res.status(500).json({
      status: "Error",
      message: "Something went wrong during login",
    });
  }
};

exports.handleLogout = (req, res) => {
  try {
    res.clearCookie("token")
    res.status(200).json({
        status:'success',
        message:"Logout Success"
    })


  } catch (error) {
    
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

exports.changePass=async (req,res)=>{
    const {currentPassword,newPassword}=req.body;


}
