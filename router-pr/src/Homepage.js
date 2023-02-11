import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()


    const products = ()=>{
        navigate("/products?q=pants")
    }
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">어바웃 페이지로 이동</Link>
        <button onClick={products}>products</button>
    </div>
  )
}

export default Homepage