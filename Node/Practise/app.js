const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const productRoutes=require('./routes/productRoutes')
app.use(express.json)

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then((con) => {
  
  console.log('DB connection Successful');
});
app.use('/api',productRoutes)


const port=8000;

app.get('/',(req,res)=>{
    res.send("Welcome to BAckend App")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)

});

