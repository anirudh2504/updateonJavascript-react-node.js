const express=require(express)
const mongoose=require('mongoose')
const dotenv=require(dotenv)

dotenv.config({ path: '../con' });


const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then((con) => {
  console.log(con.connections);
  console.log('DB connection Successful');
});