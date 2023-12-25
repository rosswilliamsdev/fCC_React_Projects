import buttonsObject from "./buttonsObject";

export default function Buttons() {
  const buttonEntries = Object.entries(buttonsObject);
//   const style = {
//     
//   };
  return (
    <div className="button-grid container">
      {buttonEntries.map(([key, value]) => (
        <div key={key} className={`button ${key}`}>
          {value}
        </div>
      ))}
    </div>
  );
}

