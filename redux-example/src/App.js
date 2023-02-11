import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from './Box'

function App() {

  const count = useSelector(state=>state.count)
  const id = useSelector(state=>state.id)
  const ps = useSelector(state=>state.ps)


  const dispatch = useDispatch()

  const increase = ()=>{
    dispatch({type:"increament" ,payload:{id:"호연",password:"123"}})
    
  }

  return (
    <div>
      <h1>{count}</h1>
      <h2>{id}{ps}</h2>
      <button onClick={increase}>클릭</button>
      <Box/>
    </div>
  );
}

export default App;
