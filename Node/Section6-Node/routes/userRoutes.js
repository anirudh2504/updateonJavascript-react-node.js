const express = require('express');

const authController=require('../controller/authController')

const router = express.Router();
const userController=require('../controller/userController')


//authentication routes
router.post('/signup',authController.signup)
router.post('/login',authController.login)


//normal Routes 
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);




module.exports=router;

