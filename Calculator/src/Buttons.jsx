import buttonsObject from "./buttonsObject";

export default function Buttons({ handleCalc }) {
  const buttonEntries = Object.entries(buttonsObject);

  return (
    <div className="button-grid container">
      {buttonEntries.map(([key, value]) => (
        <button onClick={handleCalc} key={key} className={`button ${key}`}>
          {value}
        </button>
      ))}
    </div>
  );
}
