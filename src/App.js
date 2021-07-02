import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="parent" className="App" onClickCapture={() => console.log('parent')}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React 29 group!!!
          You are the very best! 👍
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="child" onClickCapture={() => console.log('child')}>Child</button>
      </header>
    </div>
  );
}

export default App;
