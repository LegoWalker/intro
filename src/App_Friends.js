import React, {useState} from "react"
import './App.css';
import Friends from "./Friends";

const person = {
  id: "1",
  name: "Wayne",
  salary: "$200",
  address: {
    street: "19/92 Bush Road",
    city: "Auckland",
    country: "New Zealand",
    postcode: "0632",
    zones: {      
      earthZone: "N3",
      waterZone: "W5",
      salary: "$300"
    }
  }
};

//const friends = ["Duncan", "Lynette", "Peter", "Kirsty"];

const friends = [
  {
    id: 1,
    name: "Duncan",
    age: "51"
  }, 
  {
    id: 2,
    name: "Lynette",
    age: "49"
  },
  {
    id: 3,
    name: "Peter",
    age: "44"
  },
  {
    id: 4,
    name: "Kirsty",
    age: "39"
  },
];

export default function App() {
  // const {id, name, salary, 
  //   address: {street, city, country, postcode, 
  //     zones: {earthZone, waterZone, salary: minimumSalary}}} = person;

  const {id, name, salary, address} = person;
  const {street, city, country, postcode, zones} = address;
  const {earthZone, waterZone, salary: minimumSalary} = zones;

  return (
    <div className="App">
      {friends.map((friend) => (
        <Friends key={friend.id} {...friend} /> //id={friend.id} name={friend.name} age={friend.age}/>
      ))} 
      
      {/* {friends.map((friend) => (  //a different notation for the above.
         <h1>{friend}</h1>
      ))} */}
    </div>
  );
}

/*
export default function App() {
  // const {id, name, salary, 
  //   address: {street, city, country, postcode, 
  //     zones: {earthZone, waterZone, salary: minimumSalary}}} = person;
  const {id, name, salary, address} = person;
  const {street, city, country, postcode, zones} = address;
  const {earthZone, waterZone, salary: minimumSalary} = zones;
  return (
    <div className="App">
      <h1>{id}: {name}</h1>
      <h2>Salary: {salary}</h2>
      <h3>Address: {street}, {city}, {country}, {postcode}</h3>
      <div>Zones: {earthZone}, {waterZone}</div>
      <div>Zone Minimum Salary: {minimumSalary}</div>
    </div>
  );
}
*/
