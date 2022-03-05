import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

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
	background: #313D46;
  `;

  const Counter = styled.div`
  position: absolute;
  top: 145px;
  left: 140px;
  width: 130px;
  height: 40px;
  background: white;
  border-radius: 10px;
  text-align: center;
  font-size: 30px;
  padding-top:10px;
  color: #4da4e2;
  font-weight : 800;
  `
  const Button = styled.div`
   position: absolute;
   top: 210px;
   left: 190px;
   width:100px;
   height:100px;
   font-size: 30px;
   font-weight: 800;
   color: white;
   cursor: pointer;
  `

  const defaultNum = {
    num: 0
  }
function App() {
  const [currentTime, setCurrentTime] = useState(defaultNum);
  const [isPlay, setIsPlay] = useState(true);

  useEffect(()=>{
    if(isPlay){
      const intervalId = setInterval(()=>{
        updateTime();
      }, 1000)
      return () => clearInterval(intervalId)
    }
    
  },[isPlay])
  function updateTime(){
    if(currentTime.num<10000){
      setCurrentTime({num:currentTime.num++})
    }
    else{
      setCurrentTime({num:0})
    }
  }
  function stopTime(){
    let current = currentTime.num;
    setCurrentTime(current);
    setIsPlay(!isPlay)
  }
  
  return (
    <Frame>
      <Counter>
        {currentTime.num<10? `000${currentTime.num}` : (currentTime.num<100? `00${currentTime.num}` : (currentTime.num<1000? `0${currentTime.num}`:`${currentTime.num}`))}
      </Counter>
      {isPlay? <Button onClick={()=>setIsPlay(!isPlay)}> II </Button>:<Button onClick={()=>setIsPlay(!isPlay)}>▶️</Button>}
    </Frame>
  );
}

export default App;
