const express = require('express');

const app = express();
const router = express.Router();
const cookieParser=require('cookie-parser')
app.use(cookieParser())

app.use(express.json());

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
router.post('/changepassword',authController.changePass)

// Mount the router
app.use('/', router);

module.exports = app;
