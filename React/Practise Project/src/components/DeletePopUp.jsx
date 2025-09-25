import React from 'react'
import { useEffect } from 'react'
const DeletePopUp = ({stateupdate,deleteData}) => {
   useEffect(() => {
      document.body.style.overflowY='hidden'
    
      return () => {
        document.body.style.overflowY=''
      }
    }, [])
  return (
    <>
     <div className='modelwrapper'  onClick={stateupdate}>
      
    </div>
    <div className='modal-container'>
      
      <button className='pop-button' onClick={stateupdate} >X</button>
      
    <h2 style={{color:'#0d1b2a'}}>Are You Sure?</h2>
    <h5>Do you want to Delete this Data</h5>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <button className='yes-button' onClick={deleteData}>Yes</button>
        <button style={{backgroundColor:'whitesmoke',color:'black'}} onClick={stateupdate}>No</button>
    </div>
    </div>
      
    </>
  
  )
}

export default DeletePopUp