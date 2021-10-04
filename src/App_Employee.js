import React from 'react';
import Employee from './Employee';
import './App.css';

const employeeData = [
  {    
    firstName: "Jack", 
    lastName: "Smith", 
    employeeAge: "13",
    employeeId: "1",
  },
  {
    firstName: "Stephanie", 
    lastName: "Adams", 
    employeeAge: "35",
    employeeId: "2",
  },
  {
    firstName: "George",
    lastName: "Clooney",
    employeeAge: "22",
    employeeId: "2",
  },
  {
    firstName: "Anthony", 
    lastName: "Rosco", 
    employeeAge: "29",
    employeeId: "4",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Company Directory</h3>
        {employeeData.map((employee) => {
            return (
              <Employee key={employeeData.employeeId} {...employee} />
            );

          // const {firstName, lastName, employeeAge} = employee;
          // return (
          //   <Employee firstName={firstName} lastName={lastName} employeeAge={employeeAge} />
          // );
        })}


       {/* <Employee firstName="Jack" lastName="Smith" employeeAge="13"/>
       <Employee firstName="Stephanie" lastName="Adams" employeeAge="35"/>
       <Employee firstName="George" lastName="Clooney" employeeAge="22"/>
       <Employee firstName="Anthony" lastName="Rosco" employeeAge="29"/>        */}
      </header>
    </div>
  );
}

export default App;
