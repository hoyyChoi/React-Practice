import React from 'react'
import ContactItem from './ContactItem'
import Search from './Search'
import { useSelector } from 'react-redux'

const ContactList = () => {

    const arr = useSelector(state=>state.arr)
    const searchname = useSelector(state=>state.searchname)
    // const {arr,searchname} = useSelector(state=>state)
    

  return (
    <div>
        <Search/>
        <div>num : {arr.length}</div>
        {searchname==""? (arr.map((item)=>(
             <ContactItem item={item}/>
        ))):
        arr.map((item)=>{
            if(item.name == searchname){
                return <ContactItem item={item}/>
            }
            
        })
        }
    </div>
  )
}

export default ContactList