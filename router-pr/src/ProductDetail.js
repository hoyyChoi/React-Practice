import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()

  return (
    <div>
        <h1>show detail{id}</h1>
        
    </div>
  )
}

export default ProductDetail