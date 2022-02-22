import './App.css';

function App() {
  let status=true;
  function photoHandler(num){
    if(status){
      document.getElementById(num).classList.add('active')
      document.getElementById(num).classList.remove('away')
      status=false;
    }
    else{
      document.getElementById(num).classList.remove('active')
      document.getElementById(num).classList.add('away')
      status=true;
    }
   
  }
  const array=[0,1,2,3,4,5,6,7,8]
  return (
    <div className="frame">
      {array.map((num)=>{
        return <img className='photo' key={`${num}`} id={`${num}`} src={`https://picsum.photos/300?random=${num}`} alt='photo' onClick={()=>photoHandler(num)}/>
      })}
    </div>
  );
}

export default App;
