import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let m = moment();

  // current Date and time

  // Create from ISO 8601 string
  m = moment("2022-04-03T23:24:12.000");

  // Using format
  m = moment("03/04/2022 10:29PM", "DD/MM/YYYY h/mmA");
  console.log("moment in string: ", m.toString());
  console.log("moment in ISOS string: ", m.toISOString());

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
