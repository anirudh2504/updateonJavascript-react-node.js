// import React, { useContext } from 'react'
//import { UserContest } from '../App'

import { useContext } from "react"
import { ThemeContext } from "../App"

function Child3() {
    // const user=useContext(UserContest)
    const {theme,setTheme}=useContext(ThemeContext)
    function handleClick()
    {
        if(theme==='light')
            setTheme('dark')
        else
            setTheme('light')
    }
  return (
    <>
  <button onClick={handleClick}>Click Me</button>
    {/* <div>{user.name}</div> */}
  </>
  )
}

export default Child3