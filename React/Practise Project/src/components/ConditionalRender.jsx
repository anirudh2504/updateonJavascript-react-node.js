import React, { useState } from 'react'

const ConditionalRender = () => {
    const [login,setLogin]=useState(false);

  return (
    <>
    <h2>Conditional Render</h2>

    <h3>{!login ? "Please Login In" :" You logged in successfull now u CAN LOGOUT"}</h3>
    <button onClick={()=>setLogin(!login)} style={{color:"white",backgroundColor:"#800080"}}>{!login ? "LogIn" :"Logout"}</button>
    </>
  )
}

export default ConditionalRender