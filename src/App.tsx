import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let m = moment();

  m = moment("2021-04-19T23:23:00.00+04:00");

  // formart
  m = moment("07/01/1999 4:30PM", "DD/MM/YYYY h:mmP");

  console.log("toString method: ", m.toString());
  console.log("toIOString method: ", m.toISOString());

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
