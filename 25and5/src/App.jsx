
import { useEffect, useState } from 'react';
import LengthAdjuster from './LengthAdjuster';
import Timer from './Timer';
import TimerControls from './TimerControls';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
    //defaults
    const initialSessionTime = 25 * 60;
    const initialBreakTime = 5 * 60;

    //variables to hold the initial selected session and break time
    const [selectedSessionTime, setSelectedSessionTime] = useState(
        initialSessionTime
    );
    const [selectedBreakTime, setSelectedBreakTime] = useState(
        initialBreakTime
    );

    //variables to hold the current session and break times as they change
    const [sessionTime, setSessionTime] = useState(initialSessionTime);
    const [breakTime, setBreakTime] = useState(initialBreakTime);

    const [timer, setTimer] = useState(formatTime(initialSessionTime));
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    // const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function formatTime(timeInSeconds) {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedMinutes}:${formattedSeconds}`;

    }

    function handleIncrement(e) {
        let element = e.target;


        if (element.className.includes('break')) {
            setSelectedBreakTime((prev) => prev + 60);
            setBreakTime((prev) => prev + 60);
        } else if (element.className.includes('session')) {
            setSelectedSessionTime((prev) => prev + 60);
            setSessionTime((prev) => prev + 60);
        }
    }


    function handleDecrement(e) {
        let element = e.target;


        if (element.className.includes('break')) {
            setSelectedBreakTime((prev) => prev - 60);
            setBreakTime((prev) => prev - 60);
        } else if (element.className.includes('session')) {
            setSelectedSessionTime((prev) => prev - 60);
            setSessionTime((prev) => prev - 60);
        }
    }

    function toggleTimer() {
        setIsActive(!isActive);
    }

    function resetTimer() {
        setIsActive(false);
        setIsBreak(false);
        setSelectedSessionTime(initialSessionTime);
        setSelectedBreakTime(initialBreakTime);
        setSessionTime(initialSessionTime);
        setBreakTime(initialBreakTime);
        // clearInterval(intervalId); not needed because the isActive useEffect will clear the interval
    }

    const startCountdown = (isBreak) => {
        let intervalId = setInterval(() => {
            if (isBreak) {
                setBreakTime((prev) => prev - 1);
            } else {
                setSessionTime((prev) => prev - 1);
            }
        }, 100);
        setIntervalId(intervalId);
    };

    useEffect(() => {
        if (isActive) {
          if (isBreak) {
            startCountdown(true);
          }
          if (!isBreak) {
            startCountdown(false);
          }
        } else {
            clearInterval(intervalId);
        }
    }, [isActive, isBreak]);

    useEffect(() => {
        if (!isBreak) {
            setTimer(formatTime(sessionTime));
        } else {
            setTimer(formatTime(breakTime));
        }
    }, [sessionTime, breakTime, isBreak]);

    useEffect(() => {
        if (sessionTime === 0) {
          console.log('sessionTime === 0');
          clearInterval(intervalId);
          setIsBreak(true);
          setBreakTime(selectedBreakTime);
          setSessionTime(selectedSessionTime);
        } else if (breakTime === 0) {
          console.log('breakTime === 0');
          setIsBreak(false);
          setBreakTime(selectedBreakTime);
          setSessionTime(selectedSessionTime);
          clearInterval(intervalId);
        }
    }, [sessionTime, breakTime, selectedBreakTime, selectedSessionTime, intervalId]);

    return (
        <div className='container'>
            <h1>25 + 5 Timer</h1>
            <div className='length-adjuster-container'>
                <LengthAdjuster
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    formatTime={formatTime}
                    type='break'
                    text='Break Length'
                    length={selectedBreakTime}
                    id='break-length'
                />
                <LengthAdjuster
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    formatTime={formatTime}

                    type='session'
                    text='Session Length'
                    length={selectedSessionTime}
                    id='session-length'
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
