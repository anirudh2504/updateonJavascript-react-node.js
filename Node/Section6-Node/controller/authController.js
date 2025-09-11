const User = require('../models/userModel');
const jwt=require('jsonwebtoken')
const dotenv = require('dotenv');



dotenv.config({ path: '../config.env' }); //dotenv file configuration

exports.signup = async (req, res,next) => {
  try {
    // const newUser = await User.create(req.body);
    const newUser=await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm,
    })
    const token=jwt.sign({email:req.body.email},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRES_IN
    })
    console.log(token)
    res.status(201).json({
      status:'success',
      
      data: {
        user: newUser,
        token,
      },
      
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};
   