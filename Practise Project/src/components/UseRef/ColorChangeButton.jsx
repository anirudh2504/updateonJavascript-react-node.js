import React from 'react'

export default function ColorChangeButton(props) {
    function handleClick()
    {
        props.ref.current.style.backgroundColor="red"

    }
  return (
    <>
    <p>-------------------------------------------------------------------------------------------------------</p>
    <h4>ColorChangeButton Container</h4>
    <button style={{backgroundColor:"#d8bfd8"}} onClick={handleClick}>Click To change color of Parent button</button>
    </>
  )
}
