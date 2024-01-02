import { useEffect, useState } from "react";
import LengthAdjuster from "./LengthAdjuster";
import Timer from "./Timer";
import TimerControls from "./TimerControls";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  let [breakLength, setBreakLength] = useState(5);
  let [sessionLength, setSessionLength] = useState(25);
  let [timer, setTimer] = useState(25);
  let [isActive, setIsActive] = useState(false);
  let [seconds, setSeconds] = useState(60);

  function handleIncrement(e) {
    let element = e.target;

    if (element.className.includes("break")) {
      setBreakLength((prevBreakLength) => Math.min(60, prevBreakLength + 1));
    } else if (element.className.includes("session")) {
      setSessionLength((prevSessionLength) =>
        Math.min(60, prevSessionLength + 1)
      );
    }
  }

  function handleDecrement(e) {
    let element = e.target;

    if (element.className.includes("break")) {
      setBreakLength((prevBreakLength) => Math.max(0, prevBreakLength - 1));
    } else if (element.className.includes("session")) {
      setSessionLength((prevSessionLength) =>
        Math.max(0, prevSessionLength - 1)
      );
    }
  }

  function toggleTimer() {
    setIsActive(!isActive);
    countdown();
  }

  function resetTimer() {
    setIsActive(false);
    setSessionLength(25);
    setBreakLength(5);
  }

  function countdown() {
    console.log("click");
    // if the timer is active, start the countdown
    if (isActive) {
      const secondsCountdown = setInterval(function () {
        setSeconds((prevSeconds) => Math.max(0, prevSeconds - 1));
        console.log(seconds);
        if (seconds === 0) {
          setSessionLength((prevSessionLength) =>
            Math.max(0, prevSessionLength - 1)
          );
        }
        if (sessionLength === 0) {
          clearInterval(secondsCountdown);
        }
      }, 1000);
    }
  }

  // rewrite this so when there is only one minute left it displays only seconds
  useEffect(() => {
    setTimer(
      seconds === 60
        ? sessionLength + ":" + "00"
        : sessionLength + ":" + seconds
    );
  }, [sessionLength, seconds]);

  return (
    <div className="container">
      <h1>25 + 5 Timer</h1>
      <div className="length-adjuster-container">
        <LengthAdjuster
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          type="break"
          text="Break Length"
          length={breakLength}
          id="break-length"
        />
        <LengthAdjuster
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          type="session"
          text="Session Length"
          length={sessionLength}
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
