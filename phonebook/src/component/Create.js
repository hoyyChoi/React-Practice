import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Create = () => {

    const [name,setName] = useState("")
    const [num,setNum] = useState(0)
    
    const namestore = (e) =>{
        e.preventDefault()
        setName(e.target.value)
        
    }

    


    let dispatch = useDispatch()
    
    const create = (e)=>{
        e.preventDefault()
        dispatch({type:'create',payload:{name,num}})

    }


  return (
    <Form className='create-form' onSubmit={create}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>namestore(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="phone number" onChange={(e)=>setNum(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type='submit'>
        Create
      </Button>
    </Form>
  )
}

export default Create