import './App.css';

function App() {
  let status=true;
  function photoHandler(e,num){
    console.log(e.target.id)
    if(status){
      document.getElementById(`number${num}`).classList.add('active')
      document.getElementById(`number${num}`).classList.remove('away')
      status=false;
    }
    else{
      document.getElementById(`number${num}`).classList.remove('active')
      document.getElementById(`number${num}`).classList.add('away')
      status=true;
    }
   
  }
  const array=[0,1,2,3,4,5,6,7,8]
  return (
    <div className="frame">
      {array.map((num)=>{
        return <img className='photo' key={`${num}`} id={`number${num}`} src={`https://picsum.photos/300?random=${num}`} alt='photo' onClick={(e)=>photoHandler(e,num)}/>
      })}
    </div>
  );
}

export default App;
