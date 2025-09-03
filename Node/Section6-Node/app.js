
const express = require('express');
const app = express();
app.use(express.json()); //middleware  -----

const testMiddleware=(req,res,next)=>{
  console.log("I am a custom middleware")
  next();
}
app.use(testMiddleware)



//-------------------------------Custom middleware-----------------------//




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

const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')





app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)

const port = 4000;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
