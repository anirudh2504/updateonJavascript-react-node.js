const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app=require('./app')

dotenv.config({ path: './config.env' }); //dotenv file configuration

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  // console.log(con.connections);
  console.log('DB connection Successful');
});





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




//----------------creating document in db using model
const testTour=new Tour({
    name:'Park Camper',
   
    price:1500
})
//-------saving document in db-------------
testTour.save().then(doc=>{
    console.log(doc);
}).catch(err=>{
    console.log(err)
})









const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});