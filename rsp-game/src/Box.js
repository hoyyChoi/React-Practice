import React from 'react'
import "./App.css"

const Box = ({name, select, result}) => {
    if ( name === "computer" && result !== "tie" && result !== "" ) { 
        result = result === "win" ? "lose" : "win"; 
    } else {
        result = result;
    }

    

  
  return (
    <div className={`${result}`} style={{width:"500px"}}>
        <h1>{name}</h1>
        <img style={{width:"400px"}} src={select && select.img}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box