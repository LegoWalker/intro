import React, {useState} from "react"
import './App.css';
import { Switch, Route, useHistory, Link } from "react-router-dom"
import About from "./RouterBasics/About";
import Contact from "./RouterBasics/Contact";
import Home from "./RouterBasics/Home";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <br/>
      <Link to="/about"> About Us </Link> 
      <Link to="/contact"> Contact Us </Link> 
      <Link to="/"> Home Page </Link>
      <br/><br/>
      <button onClick={() => history.push("/about")}> About Us </button> 
      <button onClick={() => history.push("/contact")}> Contact Us </button> 
      <button onClick={() => history.push("/")}> Home Page </button>
      <br/><br/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}
