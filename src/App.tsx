import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const m = moment();

  // GETTING UNITS

  // SETTING UNITS

  // MAX AND MIN FUNCTION
  const differentDate = moment("2022/04/30");

  console.log(moment.min(m, differentDate).toString());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
