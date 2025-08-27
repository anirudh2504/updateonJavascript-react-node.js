import React, { useContext } from 'react'
import { UserContext } from '../../App'

function Child2() {
    const ChildContext =useContext(UserContext)
  return (
    <>
     <div>Child2</div>
     <h5>{ChildContext.name}</h5>
    </>
   
  )
}

export default Child2