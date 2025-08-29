// const fs = require('fs');

//----------------------Sync/Blocking way---------------------------------------------
// const readedData = fs.readFileSync('./TextFiles/read.txt', 'utf-8');
// console.log(readedData);

// const writedata = `We are reading data from the read file and writing that data into the write file which had empty content: \n\n${readedData}`;
// fs.writeFileSync('./TextFiles/write.txt', writedata);
// console.log("Data written successfully");

//------------------------------Async/Non-Blocking way---------------------------------
// fs.readFile('./TextFiles/read.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });
// console.log("Data Fetching...");

//------------------------------Web server--------------------
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from Server");
// });
// server.listen(7000, "127.0.0.1", () => console.log("Listning on port 7000"));



//------------------------------express---------------------------
const express =require('express')
const fs=require('fs');
const app=express();
const port=3000;


app.get('/',(req,res)=>{
    console.log("Get request on server")
    res.end("Server Rendering")
})
app.get('/api',(req,res)=>{
   const data=fs.readFileSync('./data.json')
   
    res.end(data)
    console.log()
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})