/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LengthAdjuster from "./LengthAdjuster";
import Timer from "./Timer";
import TimerControls from "./TimerControls";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const initialSessionMinutes = 25;
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [sessionMinutes, setSessionMinutes] = useState(2);
  const [timer, setTimer] = useState(formatTime(sessionMinutes, 0));
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function formatTime(minutes, seconds) {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

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
  }

  function resetTimer() {
    setIsActive(false);
    setSessionMinutes(initialSessionMinutes);
    setBreakMinutes(5);
    setRemainingSeconds(0);
    clearInterval(intervalId);
  }

  function startCountdown() {
    const newIntervalId = setInterval(function () {
      setRemainingSeconds((prevRemainingSeconds) => {
        const newSeconds = Math.max(0, prevRemainingSeconds - 1);

        if (newSeconds <= 0) {
          setSessionMinutes((prevSessionMinutes) =>
            Math.max(0, prevSessionMinutes - 1)
          );
          return 59;
        }
        return newSeconds;
      });
    }, 10);

    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    setTimer(formatTime(sessionMinutes, remainingSeconds));
  }, [sessionMinutes, remainingSeconds]);

  useEffect(() => {
    if (sessionMinutes <= 0 && remainingSeconds <= 1) {
      setIsBreak(true);
      setTimer(formatTime(breakMinutes, 0));
    }
  }, [remainingSeconds]);

  useEffect(() => {
    if (isActive) {
      startCountdown();
    } else {
      clearInterval(intervalId);
    }
  }, [isActive]);

  useEffect(() => {
    if (isBreak) {
      console.log(isBreak);
    }
  }, [isBreak]);

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
      <Timer timer={timer} isBreak={isBreak} />
      <TimerControls
        toggleTimer={toggleTimer}
        isActive={isActive}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
