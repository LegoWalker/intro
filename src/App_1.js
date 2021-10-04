import logo from './logo.svg';
import './App.css';
import Documentation from "./Documentation";

function App() {
  const headerText = "Hello Youtube!";
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{headerText}</p>
        <img src={logo} className="App-logo" alt="logo" />
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
        <Documentation />
      </header>
    </div>
  );
}

export default App;
