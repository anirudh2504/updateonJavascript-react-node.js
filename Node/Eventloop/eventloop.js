const fs = require("fs");
setTimeout(() => {
  console.log("Timer 1 executed"), 3000;
});

setImmediate(() => {
  console.log("Timer of SetImmediate executed ");
});

fs.readFile("test-file.txt", () => {
  console.log("I/O task finished");
  console.log("------------------------------");

  setTimeout(() => {
    console.log("Timer 2 executed"), 3000;
  });

  setTimeout(() => {
    console.log("Timer 1 executed"), 0;
  });
  setTimeout(()=>{
    console.log("Set timeout with 3 sec time after without time")
  },3000)

  setImmediate(() => {
    console.log("Timer of SetImmediate 2 executed ");
  });
  process.nextTick(() => {
    console.log("Process next tick function executed");
  });
});

console.log("Hello from Top level Code");
