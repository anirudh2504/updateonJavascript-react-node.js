const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' }); //dotenv file configuration

exports.signup = async (req, res, next) => {
  try {
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    }); //unique thing of user,jwt secret key,{expiry time}
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // console.log(token);
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // step 1-----check if email and password exists
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide right email and password ',
      });
    }

    //step 2------check if mail and password are correct
    const user = await User.findOne({ email: email }).select('+password');
    // console.log(password)//entered pass
    // console.log(user.password) //pass stored in db and encrypted
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password',
      });
    }

    //step 3----if everthing good send res
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};

//-----------------------for test and debug
// exports.login = async (req, res, next) => {
//   // console.log('--- Incoming Request ---');
//   // console.log('Headers:', req.headers);
//   // console.log('Body:', req.body);

//   const email = req.body.email;
//   const password = req.body.password;

//   // console.log('Email:', email);
//   // console.log('Password:', password);

//   if (!email || !password) {
//     console.log('Missing email or password');
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Please provide email and password',
//     });
//   }

//   console.log(' Email and password received');

//   // Placeholder token response
//   const token = '';
//   res.status(200).json({
//     status: 'success',
//     token,
//   });
// };

exports.protect = async (req, res, next) => {
  //check token exist or not
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  console.log(token);

  if (!token) {
    return next(
      res.status(401).json({
        status: 'fail',
        message: 'Please login to get access ',
      }),
    );
  }

  //verify the token
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    //check user still exist

    const curentUser = await User.findById(decoded.id);
    if (!curentUser) {
      return next(
        res.status(401).json({
          status: 'fail',
          message: 'user with this token not exist ',
        }),
      );
    }

    //check if user change password after token was issued
    if (curentUser.passwordChangedAt) {
      const changedTimestamp = parseInt(
        freshUser.passwordChangedAt.getTime() / 1000,
        10,
      );

      if (decoded.iat < changedTimestamp) {
        return next(
          res.status(401).json({
            status: 'fail',
            message: 'User recently changed password. Please login again.',
          }),
        );
      }
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid/Expired Token',
    });
  }
//grant access to user if all things are correct
req.user=curentUser
  next();
};
