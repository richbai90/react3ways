import React, {useState, useEffect} from 'react';
import defaultSrc from './logo.svg';
import secondarySrc from './logo2.svg';
import './App.css';
import Logo from './Logo';

let i = 0;
function updateI() {
  i++
}

function App() {
  useEffect(() => {
    setTimeout(updateI, 5000)
    alert(i);
  }, [i])
  const [src, setSrc] = useState(defaultSrc);
  return (
    <div className="App">
      <header className="App-header">
        <Logo src={src} />
        <button onClick={() => {
          if(src === defaultSrc) {
            setSrc(secondarySrc);
          } else {
            setSrc(defaultSrc)
          }
        }}>Change Logo</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
