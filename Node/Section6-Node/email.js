const nodemailer=require('nodemailer')
const { options } = require('./app')
const sendEmail=options=>{
    //1>>create transpoter
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'process.env.USER_NAME'
        }
    })


    //2>>>>define email options

    //3>>>Send the email
}