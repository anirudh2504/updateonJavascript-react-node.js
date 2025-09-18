const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Tell us your Name'],
  },
  email: {
    type: String,
    required: [true, 'Please Provide email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide correct Email'],
  },
  photo: String,
  role:{
    type:String,
    enum:['user','admin'],   // this is used to make sure user can only enter these two values only
    default:'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 8,
    select:false   //  this will exclude password when user hits get req in db
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm Password'],
    validate: {
      //this works only when we use Create or Save methods
      validator: function (el) {
        return el === this.password;
        
      },
    },
  },
  passwordChangedAt:Date,
  passwordResetToken:String,
  passwordResetExpires:Date
});


// userSchema.pre('save',async()=>{         //>>>>>this will not work bcz arrow fn does not have this keyword 
//   console.log("I am inside pre save hook")
// })

userSchema.pre('save',async function(next){  //this will run before saving the data
  if(!this.isModified('password'))return next();
  this.password=await bcrypt.hash(this.password,12)  // This is used to encrypt password 
  this.passwordConfirm=undefined;     //this will hide the cnfrm pass field from database
  next();
  //this.password=bcrypt.compare("user password",decrpt passs saved in db,function(err,result)={result=>true/false})
// app.get('/',function(res,req)=>{
//   let token=jwt.sign({email:"test@gjhg"},"secret")   ///this is our jwt token
//   res.cookie("tooken",token)
// })

//want to access
//let data=JWT.verify(req.cookie.token,secret)//use cookieparser before this 
//like this app.use(cookie.parser())
})





const User = mongoose.model('User', userSchema);
module.exports = User;
