import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <>
    {/* <div>NavBar</div> */}
    <div>
        <ul>
            <li> <NavLink to="/">Home Page</NavLink></li>
             <li> <NavLink to="/about">About Page</NavLink></li>
              <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
               
        </ul>
    </div>
    
    </>
    
    
  )
}

export default NavBar