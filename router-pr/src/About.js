import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const homepage = ()=>{
        navigate('/')
    }
  return (
    <div>
        <h1>About</h1>
        <button onClick={homepage}>go to home page</button>
    </div>
  )
}

export default About