import { useEffect, useState } from "react";
import LengthAdjuster from "./LengthAdjuster";
import Timer from "./Timer";
import TimerControls from "./TimerControls";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  let [breakMinutes, setBreakMinutes] = useState(5);
  let [sessionMinutes, setSessionMinutes] = useState(25);
  let [timer, setTimer] = useState(25);
  let [isActive, setIsActive] = useState(false);
  let [seconds, setSeconds] = useState(1);

  function handleIncrement(e) {
    let element = e.target;

    if (element.className.includes("break")) {
      setBreakMinutes((prevBreakLength) => Math.min(60, prevBreakLength + 1));
    } else if (element.className.includes("session")) {
      setSessionMinutes((prevSessionLength) =>
        Math.min(60, prevSessionLength + 1)
      );
    }
  }

  function handleDecrement(e) {
    let element = e.target;

    if (element.className.includes("break")) {
      setBreakMinutes((prevBreakLength) => Math.max(0, prevBreakLength - 1));
    } else if (element.className.includes("session")) {
      setSessionMinutes((prevSessionLength) =>
        Math.max(0, prevSessionLength - 1)
      );
    }
  }

  function toggleTimer() {
    setIsActive(!isActive);
    if (isActive) {
      countdown();
    }
  }

  function resetTimer() {
    setIsActive(false);
    setSessionMinutes(25);
    setBreakMinutes(5);
  }

  // function minutesCountdown() {
  //   setTimeout(function () {
  //     setSessionMinutes((prevSessionLength) =>
  //       Math.max(0, prevSessionLength - 1)
  //     );
  //   }, 1000);
  // }

  function countdown() {
    const intervalId = setInterval(function () {
      setSeconds((prevSeconds) => {
        const newSeconds = Math.max(0, prevSeconds - 1);

        if (newSeconds === 0) {
          setSessionMinutes((prevSessionMinutes) =>
            Math.max(0, prevSessionMinutes - 1)
          );

          if (sessionMinutes === 0) {
            clearInterval(intervalId);
            resetTimer();
          }

          return 59; // Reset seconds to 59 after reaching 0
        }

        return newSeconds;
      });
    }, 1000);
  }

  useEffect(() => {
    const formattedSeconds =
      seconds === 60 ? "00" : seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes =
      sessionMinutes < 10 ? `0${sessionMinutes}` : sessionMinutes;
    setTimer(`${formattedMinutes}:${formattedSeconds}`);
  }, [sessionMinutes, seconds]);

  return (
    <div className="container">
      <h1>25 + 5 Timer</h1>
      <div className="length-adjuster-container">
        <LengthAdjuster
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          type="break"
          text="Break Length"
          length={breakMinutes}
          id="break-length"
        />
        <LengthAdjuster
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          type="session"
          text="Session Length"
          length={sessionMinutes}
          id="session-length"
        />
      </div>
      <Timer timer={timer} />
      <TimerControls
        toggleTimer={toggleTimer}
        isActive={isActive}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
