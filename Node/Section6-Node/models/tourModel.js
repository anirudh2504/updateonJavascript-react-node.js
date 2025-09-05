const mongoose=require('mongoose')
//------------------------Schema for tour---------------------

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,'Must have a price']
    }
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