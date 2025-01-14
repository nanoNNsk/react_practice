import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";

function App() {
  return (
    <div className="App">
      <Welcome names="nano" username="hero"/>
    </div>
  );
}

export default App;
