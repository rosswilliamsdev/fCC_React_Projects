export default function TimerControls({ toggleTimer, isActive, resetTimer }) {
  return (
    <div className="timer-controls">
      <button id="start_stop" onClick={toggleTimer}>
        {isActive ? (
          <i className="fa-solid fa-pause"></i>
        ) : (
          <i className="fa-solid fa-play"></i>
        )}
      </button>
      <button className="start"></button>

      <button id="reset" onClick={resetTimer}>
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  );
}
