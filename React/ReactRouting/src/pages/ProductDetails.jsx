import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const param=useParams();
  return (
    <>
   <h1>Product Detail !</h1>
   <ul>
    <p>{param.id}</p>
   </ul>
    
    </>
    

  )
}

export default ProductDetails