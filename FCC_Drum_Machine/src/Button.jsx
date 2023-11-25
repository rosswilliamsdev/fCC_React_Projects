import React from "react";
import { heaterKit } from "./heaterKit";

export default function Button() {
  return (
    <div>
      <h1>Hi Ross</h1>
      {heaterKit.map((element) => {
        <div id={element.desc} className="drum-pad">
          {element.letter}
        </div>;
      })}
    </div>
  );
}
