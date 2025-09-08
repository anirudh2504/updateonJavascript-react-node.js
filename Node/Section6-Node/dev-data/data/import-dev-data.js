const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs=require('fs')
const Tour=require('../../models/tourModel')


dotenv.config({ path: './config.env' }); //dotenv file configuration

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  // console.log(con.connections);
  console.log('DB connection Successful');
});

const tours=JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'))




//---------------DELETE THE PreLOaded Data
const deleteData=async()=>{
    try {
        await Tour.deleteMany();
        console.log("OLD DATA GONE")
        
    } catch (error) {
        console.log(error)
        
    }
    process.exit();
}

//-------------------import data-----------
const importData=async()=>{
    try {
         await Tour.create(tours);
    console.log("DATA LOADED SUCCESSFULLY")
        
    } catch (error) {
        console.log(error)
    }
    process.exit(); 
   
}
if(process.argv[2]==='--import'){
    importData();
}
else if(process.argv[2]==='--delete')
    {
          deleteData();
    }
