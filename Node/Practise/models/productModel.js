const {Schema,model} =require('mongoose')
const ProductSchema=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:30,
    },
    price:{
        type:Number,
        required:true,
        maxlength:20,
    },
    description:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true,
       
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
const ProductModel=model("product",ProductSchema)
module.exports=ProductModel