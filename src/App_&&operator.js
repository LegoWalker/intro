import React, {useState} from "react"
import './App.css';

//const friends = ["Duncan", "Lynette", "Peter", "Kirsty"];

export default function App() {
  const friends = ["Duncan", "Lynette"];  //undefined;  
  return (
    <div className="App">
      {friends && friends.length > 0 && (
        <div>
         <h1>Friends List:</h1>
         {friends.map((friend) => (
           <h5> {friend} </h5>
         ))};
        </div> 
      )}
    </div>
  );
}
