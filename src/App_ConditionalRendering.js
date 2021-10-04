import React, {useState} from "react"
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);  
  return (
    <div className="App">
      <h1>Welcome tho the App!</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      {loggedIn ? (
        <h1>Hello Wayne!</h1>
      ) : (
        <div>
          <h2> Please log in to continue </h2>
        </div>
      )}
    </div>
  );
}
