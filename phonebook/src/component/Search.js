import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Search = () => {
  
  const [searchname,setSearchName] = useState('')

  const dispatch = useDispatch()

  const search = ()=>{
    dispatch({type:'search',payload:{searchname}})
  }

    
    return (
    <div>
        <input className='search' placeholder='name' onChange={(e)=>setSearchName(e.target.value)}></input>
        <Button variant="primary" onClick={search}>
            Search
        </Button>
        
    </div>
  )
}

export default Search