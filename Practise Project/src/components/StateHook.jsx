import React, { useState } from 'react'
export default function StateHook()
{
      const[counter,setCount]=useState(0);
  function handleClick()
  {
    setCount(counter+1)

  }
//   function handleReset()
//   {
//     setCount(0)
//   }
  return(
    <>
    <h2>Use State Hook</h2>
    <h2>Counter Value :{counter}</h2>

    <button onClick={handleClick} style={{color:"white",backgroundColor:"#800080"}}>Counter increaser</button>
    
    <button onClick={()=>setCount(0)} style={{color:"white",backgroundColor:"#800080"}}>Reset</button>
    </>
  )
   

}