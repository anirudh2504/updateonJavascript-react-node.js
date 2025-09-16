
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config({ path: './config.env' });
const app=require('./app')
const db=process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD)

mongoose.connect(db).then(()=>{
console.log("DATABASE CONNECT SUCCESS")
})

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})