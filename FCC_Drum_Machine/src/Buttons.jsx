import { heaterKit } from "./heaterKit";

export default function Buttons() {
  return (
    <div className="pad-grid">
      {heaterKit.map((element) => {
        return (
          <div key={element.id} id={element.desc} className="drum-pad">
            <audio className="clip" id={element.letter} src={element.sampleURL}/>
            {element.letter}
          </div>
        );
      })}
    </div>
  );
}
