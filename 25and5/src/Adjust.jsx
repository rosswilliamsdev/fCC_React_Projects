export default function Adjust({ text, length }) {
  return (
    <div>
      <h4>{text}</h4>
      <div>
        <button>
          <i className="fa-solid fa-arrow-up fa-2x"></i>
        </button>
        {length}
        <button>
          <i className="fa-solid fa-arrow-down fa-2x"></i>
        </button>
      </div>
    </div>
  );
}
