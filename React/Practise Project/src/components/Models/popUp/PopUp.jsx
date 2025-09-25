import React from 'react'
import { useEffect} from 'react'
const PopUp = ({buttonClick}) => {
  useEffect(() => {
    document.body.style.overflowY='hidden'
  
    return () => {
      document.body.style.overflowY=''
    }
  }, [])
  
  return (
    <>
    <div className='modelwrapper' onClick={buttonClick}>
      
    </div>
    <div className='modal-container'>
      
      <button onClick={buttonClick}className='pop-button'>X</button>
      
    <h2 style={{color:'#0d1b2a'}}>PopUp</h2>
    <h5>"Unlock exclusive access. <br />Get 15% off your first order today. <br />Don't miss out on this limited-time offer!</h5>
    </div>
    </>
    
  )
}

export default PopUp