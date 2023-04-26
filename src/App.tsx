import React from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Game from "./components/TriviaGame";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Game />
      </header>
    </div>
  );
}

export default App;
