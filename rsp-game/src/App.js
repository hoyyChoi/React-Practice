import './App.css';
import Box from './Box'
import { useState } from 'react';


// 컴포넌트 2개 - 이름 사진 결과
// 선택할 버튼 3개 내가 선택
// 결과 값

function App() {


  const choice = {
    rock:{
      name:"rock",
      img:"https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
    },
    scissors:{
      name:"scissors",
      img:"https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
    },
    paper:{
      name:"paper",
      img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
    }
  }

  const change =(userChoice)=>{
    setSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }

  const judgement = (user,computer)=>{
    if(user.name == computer.name){
      return 'tie'
    }else if(user.name == 'rock'){
      if(computer.name == 'paper'){
        return 'lose'
      }else{
        return 'win'
      }
    }else if(user.name == 'paper'){
      if(computer.name == 'rock'){
        return 'win'
      }else{
        return 'lose'
      }
    }else{
      if(computer.name == 'rock'){
        return 'lose'
      }else{
        return 'win'
      }
    }
  }

 

  const [select,setSelect] = useState(null)
  const [comselect,setComSelect] = useState(null)
  const [result,setResult] = useState(null)
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Box name="you" select={select} result={result}/>
        <Box name="computer" select={comselect} result={result}/>
        </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={()=>change('scissors')}>가위</button>
        <button onClick={()=>change('rock')}>바위</button>
        <button onClick={()=>change('paper')}>보</button>
      </div>
    </div>
    
  );
}

export default App;
