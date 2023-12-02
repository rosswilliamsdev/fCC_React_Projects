import { heaterKit } from "./heaterKit";

export default function Buttons() {

  function handleClick(e) {
    let audio = e.target.children[0];
    audio.play();
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
            </audio>
          </div>
        );
      })}
    </div>
  );
}
