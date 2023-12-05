import { heaterKit } from "./heaterKit";
import { useEffect } from "react";

export default function Buttons() {
  const handleKeyPress = (event) => {
    // Define the key-to-sound mapping
    const soundMap = {
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

    // Check if the pressed key has a corresponding sound
    const keyPressed = event.key.toLowerCase();
    const soundFileName = soundMap[keyPressed];

    // If a sound is mapped to the pressed key, play it
    if (soundFileName) {
      const audio = new Audio(soundFileName);
      audio.play();
    }
  };
  function handleClick(e) {
    let audio = e.target.children[0];
    audio.play();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="pad-grid">
      {heaterKit.map((element) => {
        return (
          <div
            key={element.id}
            id={element.desc}
            className="drum-pad"
            onClick={(e) => handleClick(e)}
          >
            <audio
              className="clip"
              id={element.letter}
              src={element.sampleURL}
            />
            {element.letter}
          </div>
        );
      })}
    </div>
  );
}
