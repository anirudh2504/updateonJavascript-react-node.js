const express = require('express');

const authController=require('../controller/authController')

const router = express.Router();
const userController=require('../controller/userController')

router.post('/signup',authController.signup)

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);




module.exports=router;

