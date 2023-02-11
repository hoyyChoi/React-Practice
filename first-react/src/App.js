import './App.css';
import { useState } from 'react';

function App() {
  let counter = 0
  const [counter2,Setcounter2] = useState(0)

  const change = ()=>{
    counter = counter +1
    Setcounter2(counter2+1)
    console.log(counter,counter2)
  }
  // 유저가 버튼을 누른다,
  // change 함수가 실행
  // counter 값이 1로 변환 (동기)
  // secounter2 함수는 비동기이므로 change함수가 종료되면 완료
  // 그러므로 콘솔은 counter값만 찍힌다.
  // counter2는 아직 콘솔에 업데이트가 되지 않는다.
  // setcounter2 함수때문에 컴포넌트가 reRender되면서 counter는 다시 0으로 초기화 되고.
  // counter2는 +1이 된 값으로 업데이트되어 ui에 보여진다.

  return (
    <div>
      <div>counter{counter}</div>
      <div>counter2{counter2}</div>
      <button onClick={change}>클릭</button>
    </div>
  );
}

export default App;
