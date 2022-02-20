import './App.css';

function App() {
  let status = true;
  function showLogo(){
    if(status===true){
      document.querySelector('.white').classList.add('big');
      document.querySelector('.purple').classList.add('normal');
    }
    else{
      document.querySelector('.white').classList.remove('big');
      document.querySelector('.purple').classList.remove('normal');
    }
    status=!status;
  }

  return (
    <div className='frame' onClick={showLogo}>
      <div className='logo white normal'/> 
      <div className='logo purple small'/>  
    </div>
  );
}

export default App;
