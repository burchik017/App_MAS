import './App.css';
import React, { useState, useEffect, useRef } from 'react';

const colors = ['#faebd7', '#FFD700', '#D8BFD8', '#00FFFF', '#A52A2A'];

function App() {
  const divRef = useRef();
  const [activeLink, setActiveLink] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(()=>{
    if (changed) {
      let timerCounter = 0;
      let t = setInterval(()=>{
        divRef.current.style.backgroundColor = colors[timerCounter];
        timerCounter++;
        if (timerCounter === 5) {
          setActiveLink(true);
          clearInterval(t);
        }
      }, 1000);
      if (timerCounter === 5) {
        setActiveLink(true);
        clearInterval(t);
      };
      return () => {
        clearInterval(t);
      };
    }
  }, [changed]);

  return (
    <div className="App">
      <main className="App-main" ref={divRef} onPointerMove={()=> setChanged(true)} >
        <a className={`hideLink_company ${activeLink ? 'active' : ''}`} href="https://www.mobileappsoft.com/" >Mobile App Soft</a>
        <p>Think. Perform. Relax</p>
      </main>
    </div>
  );
}

export default App;
