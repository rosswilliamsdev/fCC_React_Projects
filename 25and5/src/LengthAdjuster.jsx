export default function LengthAdjuster({
  text,
  length,
  handleIncrement,
  handleDecrement,
  type,
  formatTime,
}) {
  return (
    <div className="length-adjuster">
      <h6 id={`${type}-label`}>{text}</h6>
      <div>
        <button onClick={handleIncrement} id={`${type}-increment`}>
          <i className={`fa-solid fa-arrow-up ${type}`}></i>
        </button>
        {formatTime(length)}
        <button onClick={handleDecrement} id={`${type}-decrement`}>
          <i className={`fa-solid fa-arrow-down ${type}`}></i>
        </button>
      </div>
    </div>
  );
}
