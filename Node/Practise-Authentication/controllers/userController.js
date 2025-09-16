const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
    try {
        // console.log("Signup request body:", req.body);

        const { name, email, password, profilePic } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists with this email");
        }

        const hashedPass = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name,
            email,
            password: hashedPass,
            profilePic
        });

        res.status(201).json({
            status: 'Success',
            data: newUser
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({
            status: 'Error',
            message: 'Something went wrong during signup'
        });
    }
};


