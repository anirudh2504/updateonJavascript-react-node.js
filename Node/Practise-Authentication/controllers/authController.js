const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Otp = require("../models/otp.model");
const sendEmail = require("../sendEmail");
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
    // 3>>>generate token
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
    // console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Something went wrong during login",
    });
  }
};

exports.handleLogout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      status: "success",
      message: "Logout Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

exports.changePass = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
      res.status(404).json({
        status: "fail",
        message: "please Login first",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //  console.log(decoded)

    const user = await User.findById(decoded.id); //this will find login user in db
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "No such User find",
      });
    }
    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      return res.status(404).json({
        status: "fail",
        message: "Please enter correct current password",
      });
    }
    const newHashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = newHashedPassword;
    await user.save();
    res.status(200).json({
      status: "Success",
      message: "Password updated successfull",
      user,
    });
  } catch (error) {
    //console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

//   REset password Routes
exports.handleForgotPassword = async (req, res) => {
  // console.log(req)
  try {
    
    const { email } = req.body;

    // console.log(req)

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        status: "Success",
        message: "If your email is registered, you will receive an OTP.",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    const message = `Your OTP to reset your password is ${otp}`;

    const newOtp = new Otp({
      email,
      otp,
    });

    await newOtp.save();
    await sendEmail(email, "Reset Password", message);

    res.status(200).json({
      status: "Success",
      message: "OTP sent successfully",
    });
  } catch (error) {
    //console.error(error);
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

exports.handleVerifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({ email, otp });
    if (
      !otpRecord ||
      Date.now() > otpRecord.createdAt.getTime() + 10 * 60 * 1000
    ) {
      res.status(404).json({
        status: "Fail",
        message: "Not Found or Otp Expired",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Otp verified successfull",
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};

exports.handleResetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const otpRecord = await Otp.findOne({ email, otp });
    if (
      !otpRecord ||
      Date.now() > otpRecord.createdAt.getTime() + 10 * 60 * 1000
    ) {
      return res.status(404).json({
        status: "Fail",
        message: "OTP not found or expired",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "no such user found",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();
    await Otp.deleteMany({ email });
    res.status(200).json({
      status: "Success",
      message: "Password Reset success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Server Error",
    });
  }
};
