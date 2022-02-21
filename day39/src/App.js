import './App.css';

function App() {

  function toggleHandler(){
      document.querySelector('.toggle').classList.remove('paused')
      document.querySelector('.toggle').classList.add('active');
      document.querySelector('.menus').classList.add('active');

    }
function menusHandler(){
      document.querySelector('.toggle').classList.remove('active');
      document.querySelector('.menus').classList.remove('active');

    }
  
  return (
    <div className="frame">
      <div className='toggle paused' onClick={toggleHandler}>
        <div className='line-top'></div>
        <div className='line-bottom'></div>
      </div>
      <div className='menus' onClick={menusHandler}>
        <ul>
          <li><span>HOME</span></li>
          <li><span>WORK</span></li>
          <li><span>LIFE</span></li>
          <li><span>SPIRIT</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
