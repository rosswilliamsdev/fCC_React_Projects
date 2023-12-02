import { heaterKit } from "./heaterKit";

const keyMap = {
  81: 0,
  87: 1,
  69: 2,
  65: 3,
  83: 4,
  68: 5,
  90: 6,
  88: 7,
  67: 8,
};

export default function Buttons() {

  document.addEventListener("keydown", (e)=>{
    let code = String(e.keyCode)
    if (Object.keys(keyMap).includes((code))){
      let pads = document.querySelectorAll(".drum-pad")
      let index = keyMap[code]
      let pad = pads[index]
      pad.children[0].play()
    }
  })

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
          </div>
        );
      })}
    </div>
  );
}
