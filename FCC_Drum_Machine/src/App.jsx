import Buttons from "./Buttons";
import "./App.css";
import { useEffect } from "react";
import { heaterKit } from "./heaterKit";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");
  const soundClipsMap = {
    q: heaterKit[0].sampleURL,
    w: heaterKit[1].sampleURL,
    e: heaterKit[2].sampleURL,
    a: heaterKit[3].sampleURL,
    s: heaterKit[4].sampleURL,
    d: heaterKit[5].sampleURL,
    z: heaterKit[6].sampleURL,
    x: heaterKit[7].sampleURL,
    c: heaterKit[8].sampleURL,
  };
  const soundDescMap = {
    q: heaterKit[0].desc,
    w: heaterKit[1].desc,
    e: heaterKit[2].desc,
    a: heaterKit[3].desc,
    s: heaterKit[4].desc,
    d: heaterKit[5].desc,
    z: heaterKit[6].desc,
    x: heaterKit[7].desc,
    c: heaterKit[8].desc,
  };
  const handleKeyPress = (event) => {
    // Define the key-to-sound mapping

    // Check if the pressed key has a corresponding sound
    const keyPressed = event.key.toLowerCase();
    const soundFileName = soundClipsMap[keyPressed];
    const descFileName = soundDescMap[keyPressed];

    // If a sound is mapped to the pressed key, play it & display the sample title
    if (soundFileName) {
      const audio = new Audio(soundFileName);
      setDisplay(descFileName);
      audio.play();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div id="drum-machine">
      <Buttons setDisplay={setDisplay} soundDescMap={soundDescMap} />
      <div id="display">
        <h1>
          <em>The</em> Beat Machine
        </h1>
        <h2 className="sample-name">{display}</h2>
      </div>
    </div>
  );
}
