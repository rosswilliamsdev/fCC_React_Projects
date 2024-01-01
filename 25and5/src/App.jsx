import { useState } from "react";
import Adjust from "./Adjust";
import "./App.css";

function App() {
  let [breakLength, setBreakLength] = useState(5);
  let [sessionLength, setSessionLength] = useState(25);

  return (
    <div className="container">
      <h1>25 + 5 Timer</h1>
      <Adjust text="Break Length" length={breakLength} />
      <Adjust text="Session Length" length={sessionLength} />
    </div>
  );
}

export default App;
