import React, { useRef, useState } from "react";

const RefHookStopwatch = () => {
    const[time,setTime]=useState(0);

     let refTime=useRef(null);

    function handleStart()
    {
       refTime.current=setInterval(()=>{setTime(prev=>prev+1)},1000)
    }
    function handleStop()
    {
      clearInterval(refTime.current)
        
    }
    function handleReset()
    {
    
     setTime(0)

    }

  return (
    <>
    
      <h2>StopWatch</h2>
      <div>
        <h3>Time is : {time}</h3>
        <div  style={{display:"flex",justifyContent:"center",gap:"20px"}}>
          <button  style={{backgroundColor:"#f5f5dc"}} onClick={handleStart}>Start</button>
          <button  style={{backgroundColor:"#f5f5dc"}} onClick={handleStop}>Stop</button>
          <button  style={{backgroundColor:"#f5f5dc"}} onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default RefHookStopwatch;
