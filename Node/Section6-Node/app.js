


const express=require('express')
const app=express() //express config
app.use(express.json());


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
app.all('*',(req,res,next)=>{
    res.status(404).json({
        status:'fail',
        message:'Can not find This url'
    })

})



// module.exports=router

module.exports=app;

