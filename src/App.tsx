import moment from "moment";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const m = moment();

  console.log(m.toString());

  //getting units
  console.log("quater gotten from moment: ", m.get("minutes"));

  //setting units
  m.minutes(59);
  m.hour(1);
  m.second(12);
  m.set("date", 8);
  console.log(m.toString());

  const differentMoment = moment("2022-4-6");
  console.log(
    "maximum between 2 moment: ",
    moment.max(m, differentMoment).toString()
  );

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
