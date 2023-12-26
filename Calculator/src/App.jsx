import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import { evaluate } from "mathjs";

function App() {
  // calc display
  let [display, setDisplay] = useState("0");
  // keeps track of math operators
  let [lastOperator, setLastOperator] = useState(null);

  function evaluateExpression() {
    try {
      const result = evaluate(display);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  }

  function handleCalc(e) {
    const numbersRegex = /^[0-9]+(\.[0-9]+)?$/g;
    const arithmeticOperatorsRegex = /[+\-*/]/;
    const button = e.target.innerText;
    const lastButtonIsOperator =
      lastOperator && lastOperator.match(arithmeticOperatorsRegex);

    // Ensure display is treated as a string
    const displayString = display.toString();

    // if it is a number
    if (button.match(numbersRegex)) {
      if (displayString === "0") {
        setDisplay(button);

        // Number can't begin with multiple zeroes
        if (button === "0") {
          setDisplay("0");
        }
      } else {
        // This is concatenation, not arithmetic
        setDisplay(displayString + button);
      }
      // if it's: +, -, /, or *
    } else if (button.match(arithmeticOperatorsRegex)) {
      // Allows for - to be pressed first, for negative numbers
      if (displayString === "0" && button === "-") {
        setDisplay(button);
        setLastOperator(button);
      } else {
        if (lastButtonIsOperator) {
          if (button === "-") {
            setDisplay(displayString + " " + button + " ");
          } else {
            setDisplay(displayString.slice(0, -2) + button + " ");
          }
          // Remove the last operator and add the new one
        } else {
          // Adds the operator to the display
          setLastOperator(button);
          setDisplay(displayString + " " + button + " ");
        }
      }
    } else if (button === "AC") {
      // Clear
      setDisplay("0");
      setLastOperator(null);
    } else if (button === ".") {
      // Decimal can be added if one is not already
      if (!displayString.includes(".")) {
        setDisplay(displayString + ".");
      }
    } else if (button === "=") {
      evaluateExpression();
      setLastOperator(null);
    }
  }

  return (
    <div className="container">
      <div id="display">{display}</div>
      <Buttons handleCalc={handleCalc} />
    </div>
  );
}

export default App;
