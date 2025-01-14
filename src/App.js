import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import ClickFunction from "./Components/ClickFunction";
import ClickClass from "./Components/ClickClass";

function App() {
  return (
    <div className="App">

      <ClickFunction />
      <ClickClass />

    </div>
  );
}

export default App;
