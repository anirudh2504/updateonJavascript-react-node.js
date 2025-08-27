import React, { useState } from 'react'
import Child from './Child';

const ParentForStateLift = () => {
  const[name,setName]=useState('');
  return (
    <>
    <h1>State Lifting Concepts</h1>
    <div>Praent For State Lift</div>
    <div>Value inside Parent:{name}</div>
    <br />
    <br />
    <Child name={name} setName={setName} title='1'/>
    <Child name={name} setName={setName} title='2'/>

    </>
    
  )
}

export default ParentForStateLift