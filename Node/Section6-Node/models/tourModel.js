const mongoose=require('mongoose')
//------------------------Schema for tour---------------------

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true,

    },
    maxGroupSize:{
        type:Number,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,'Must have a price']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:true
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})


//--------------------Creating Modal using schema-------------------
const Tour=mongoose.model('Tour',tourSchema)




// //----------------creating document in db using model
// const testTour=new Tour({
//     name:'Park Camper',
   
//     price:1500
// })
// //-------saving document in db-------------
// testTour.save().then(doc=>{
//     console.log(doc);
// }).catch(err=>{
//     console.log(err)
// })



module.exports=Tour;