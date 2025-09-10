const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      data: {
        user: newUser,
      },
      message: 'Pass doesnot Match',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};
