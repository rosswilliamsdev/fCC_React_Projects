import { heaterKit } from "./heaterKit";

export default function Buttons() {
  const handlePlay = (e)=> {
    let audio = e.target.children[0]
    audio.play()
  }
  return (
    <div className="pad-grid">
      {heaterKit.map((element) => {
        return (
          <div key={element.id} id={element.desc} className="drum-pad" onClick={(e) => handlePlay(e)}>
            <audio className="clip" id={element.letter} src={element.sampleURL} onClick={(e) => handlePlay(e)}>
            {element.letter}
            </audio>
          </div>
        );
      })}
    </div>
  );
}
