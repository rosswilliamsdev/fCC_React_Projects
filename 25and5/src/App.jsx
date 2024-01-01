import { useState } from "react";
import Adjuster from "./Adjust";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  let [breakLength, setBreakLength] = useState(5);
  let [sessionLength, setSessionLength] = useState(25);
  let [timer, setTimer] = useState("25:00");

  return (
    <div className="container">
      <h1>25 + 5 Timer</h1>
      <div className="btn-container">
        <Adjuster text="Break Length" length={breakLength} />
        <Adjuster text="Session Length" length={sessionLength} />
      </div>
      <div className="timer">
        <h6>Session</h6>
        <div>{timer}</div>
      </div>
    </div>
  );
}

export default App;
