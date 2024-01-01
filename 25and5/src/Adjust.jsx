export default function Adjuster({ text, length }) {
  return (
    <div className="adjuster">
      <h6>{text}</h6>
      <div>
        <button className="btn-level">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        {length}
        <button>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
}
