import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [display, setDisplay] = useState(0);
  return (
    <div className="container">
      <div id="display">{display}</div>
      <Buttons />
    </div>
  );
}

export default App;
