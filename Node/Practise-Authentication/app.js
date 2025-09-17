const express = require('express');

const app = express();
const router = express.Router();
const cookieParser=require('cookie-parser')
app.use(cookieParser())

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log(req.headers);
//     next();
// });



const userController = require('./controllers/userController');
const authController=require('./controllers/authController')
const authChecker=require('./controllers/authMiddleware')

// Routes
router.get('/', (req, res) => {
    res.send("API is working!");
});
//Login &SignUP
router.post('/signup', userController.signUp);
router.post('/login',authController.logIn)

//protected Route
router.get('/protected',authChecker.checkForAuth,(req,res)=>{
    res.send("protected route")
})
//Logout
router.post('/logout',authController.handleLogout)
//change password
router.patch('/changepassword',authChecker.checkForAuth,authController.changePass)

// Password reset
router.post('/forgot-password', authController.handleForgotPassword);     //takes mail 
router.post('/verify-otp', authController.handleVerifyOtp);               // takes email and otp
router.patch('/reset-password', authController.handleResetPassword);     // takes email,otp ,newPassword
// Mount the router
app.use('/', router);

module.exports = app;
