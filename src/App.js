import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";

function App() {
  return (
    <div className="App">
      <Greet names="pop" username="ppp">
        <p> This is children props</p>
      </Greet>
      <Greet names="pink" username="ttt" >
        <button>Click me</button>
      </Greet>
      <Greet names="pong" username="aaa" />
      {/*<Greet />*/}
      <Welcome names="pop" username="ppp" />
      <Welcome names="pink" username="ttt"/>
      <Welcome names="pong" username="aaa"/>
      <Hello />
    </div>
  );
}

export default App;
