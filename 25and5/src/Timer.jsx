export default function Timer({ timer, isBreak }) {
  return (
    <div className="timer" id="timer">
      <h6>{isBreak ? "Break Time" : "Session"}</h6>
      <div id="time-left">{timer}</div>
    </div>
  );
}
