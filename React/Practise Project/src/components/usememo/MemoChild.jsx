import React from 'react'

const MemoChild=React.memo(

    (props) =>{
  return (
    <>
    <h4>ChildMemo</h4>
   {console.log("Child Rerender")} 
    <button style={{backgroundColor:"#E6E6FA"}}>{props.name}</button>

    </>
    
  )
}
)

export default MemoChild