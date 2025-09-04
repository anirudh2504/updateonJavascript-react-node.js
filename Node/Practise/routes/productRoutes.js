const express=require('express')
const router=express.Router()

const {getProducts,createProducts}=require('../controllers/productController')
router.get('/products',getProducts)

router.patch('/products',createProducts)



module.exports=router