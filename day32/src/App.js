import styled from 'styled-components';
import { useState } from 'react';

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
	overflow: hidden;
	background: linear-gradient(45deg,#D35B2B,#FAA83A);
`
const Counter = styled.div`
 background-color: white;
 position: absolute;
 top: 40%;
 left: 25%;
 width: 200px;
 height: 60px;
 border-radius: 50px;
 z-index:99;
 display: flex;
 justify-content:space-between;
 text-align: center;
 align-items:center;
 `
 const Minus = styled.div`
 font-size:3rem;
 flex: 1 0 auto;
 color: red;
 text-align: center;
  border-radius: 50%;
  margin-left:0.2rem;
 &:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}
 `
 const Number = styled.div`
 font-size:2rem;
 flex: 1 0 auto;
 color: rgb(106,133,160);
 `
 const Plus = styled.div`

 font-size:3rem;
 flex: 1 0 auto;
 color: green;
 text-align: center;
  border-radius: 50%;
  margin-right:0.2rem;
 &:hover {
  background-color: green;
  color: white;
  cursor: pointer;
}
 `
function App() {
  const [current,setNumber] = useState(0)
  const minusHandler = () =>{
    if(current>1){
      setNumber(current-1)
    }
    else{
      setNumber(0)
    }
  }
  const plusHandler = () =>{
    setNumber(current+1)

  }
  
  return (
    <Frame>
      <Counter>
      <Minus onClick={minusHandler}> - </Minus>
      <Number>{current}</Number>
      <Plus onClick={plusHandler}> + </Plus>
      </Counter>
    </Frame>
  );
}

export default App;
