import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cityArray,setCity, selectCity}) => {
    const changeStyle = () =>{

    }
  return (
    <div>
        <Button variant={`${selectCity == "" ? "outline-warning" : "warning"}`} onClick={()=>setCity("")}>νμ¬μμΉ</Button>
        {cityArray.map((item)=>(
            <Button variant={`${selectCity == item ? "outline-warning" : "warning"}`} onClick={()=>setCity(item)}>{item}</Button>
        ))}

    </div>
  )
}

export default WeatherButton