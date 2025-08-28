import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetail = () => {
  const param=useParams();
  return (
    <>
    <div>EventDetail</div>
    <h1>{param.id}</h1>
    
    </>
  )
}

export default EventDetail