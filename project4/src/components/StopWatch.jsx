import { useRef, useState } from "react";

export default function StopWatch()
{
   let refTime= useRef(0);
   const [time,setTime]=useState(0);
   function handleStart()
   {
      refTime.current =setInterval(()=>{
        setTime((time)=>time+1)
    },1000)

   }
   function handleStop()
   {
    clearInterval(refTime.current);


   }
   function handleReset()
   {
            handleStop();
            setTime(0);
   }
    return(
        <div>
            <h1>Timer is : {time} </h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    );
   

}