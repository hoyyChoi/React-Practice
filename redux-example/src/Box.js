import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {

    const counter = useSelector(state=>state.count)
  return (
    <div>Box{counter}</div>
  )
}

export default Box