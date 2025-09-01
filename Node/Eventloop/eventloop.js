const fs=require('fs')

fs.readFile("test-file.txt",()=>{
    console.log("I/O task finished")

    setTimeout(()=>{
    console.log("Timer 1 executed")
,0})
setTimeout(()=>{
    console.log("Timer 2 executed")
,3000})

setImmediate(()=>{
    console.log("Timer of SetImmediate executed ")
})
})

console.log("Hello from Top level Code") 