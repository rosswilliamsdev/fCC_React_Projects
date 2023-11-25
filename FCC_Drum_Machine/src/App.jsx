import React from "react";
import Button from "./Button";

export default function App() {
  return (
    <div id="drum-machine">
      <div id="display">
        <div className="pad-grid">
          <Button />
        </div>
      </div>
    </div>
  );
}
