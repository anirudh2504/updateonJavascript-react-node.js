import React, { useState } from 'react'
import PopUp from './PopUp';

const Model_PopUp = () => {
  const [show,setShow]=useState(false);
   function handleClick(){
    setShow((show)=>!show)
    // console.log(show)
        
   }
  return (
    <>
    <h1 >Model_PopUp</h1>
    <button style={{backgroundColor:"#d62828"}} onClick={handleClick}>Click here to show Model/Popup</button>
    {show ? <PopUp buttonClick={handleClick}/>:null}
    </>
    
  )
}

export default Model_PopUp