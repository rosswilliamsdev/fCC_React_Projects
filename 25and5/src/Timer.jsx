export default function Timer({ timer }) {
  return (
    <div className="timer" id="timer">
      <h6>Session</h6>
      <div id="time-left">{timer}</div>
    </div>
  );
}
