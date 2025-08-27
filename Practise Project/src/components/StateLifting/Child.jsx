import React from 'react'

const Child = (props) => {
  return (
    <>
    <div>Child:{props.title}</div>
    <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
    <div>
        Value Inside Child:{props.name}
    </div>
    </>
    
  )
}

export default Child