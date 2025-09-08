const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config.env' }); //dotenv file configuration
const app=require('./app')

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  // console.log(con.connections);
  console.log('DB connection Successful');
});




const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});