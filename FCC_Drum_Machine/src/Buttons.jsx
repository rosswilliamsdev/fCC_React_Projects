import { heaterKit } from "./heaterKit";

// eslint-disable-next-line react/prop-types
export default function Buttons({ setDisplay, soundDescMap }) {
  function handleClick(e) {
    let audio = e.target.children[0];
    let descKeys = Object.keys(soundDescMap);
    let clickedPadLetter = e.target.innerText.toLowerCase();
    audio.play();
    // iterate through the soundDescMap object to see if any keys match the letter of the drumpad clicked
    if (descKeys.includes(clickedPadLetter)) {
      Object.keys(soundDescMap).forEach((key) => {
        if (key === clickedPadLetter) {
          setDisplay(soundDescMap[key]);
        }
      });
    }
  }

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
