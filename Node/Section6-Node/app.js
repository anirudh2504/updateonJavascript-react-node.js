const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
.connect(DB).then(con=>{
  console.log(con.connections)
  console.log("DB connection Successful")
})
// app.use(express.json()); //middleware  -----

// const testMiddleware=(req,res,next)=>{
//   console.log("I am a custom middleware")
//   next();
// }
// app.use(testMiddleware)

//-------------------------------Custom middleware-----------------------//

// const router=expreess.router();
// const auth=(req,res,next)=>{
//   console.log("I am inside auth middleware")

//   req.user={
//     id:1,
//     role:'student'
//   }
//   if(req.user){
//     next()
//   }
//   else{
//     res.json({
//       success:false,
//       message:"Not a valid user"
//     })
//   }

// }
// const isStudent=(req,res,next)=>{
//   console.log("i am inside a student middleware")
//   if(req.user.role==='student'){
//     next();

//   }
//   else{
//     req.json({
//       success:false,
//       message:"Access Denied Not a Student"
//     })
//   }

// }
// const isAdmin=(req,res,next)=>{
//   console.log("I am inside admin middleware")
//   if(req.user.role==='Admin'){
//     next()
//   }else{
//     res.json({
//       success:false,
//       message:"YOu are not a admin=>Access Denied"
//     })
//   }
// }

// router.get('/student',auth,isStudent,(req,res)=>{

//   res.send("Student Specific Page")
// })
// router.get('/admin',auth,isAdmin,(req,res)=>{
//   res.send("Admin Page")
// })

// app.use((req,res,next)=>{
//   console.log("Hello from middleWare")
//   next()
// })

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from server Side",app:"Natours"})

// })
// app.post('/',(req,res)=>{
//     res.send("You Can post To EndPoint")
// })

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});

// module.exports=router
