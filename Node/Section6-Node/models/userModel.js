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
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 8,
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
});

userSchema.pre('save',async function(next){
  if(!this.isModified('password'))return next();
  this.password=await bcrypt.hash(this.password,12)  // This is used to encrypt password 
  this.passwordConfirm=undefined;
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
