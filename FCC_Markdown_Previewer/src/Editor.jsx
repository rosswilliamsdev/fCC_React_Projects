import React from "react";

export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");
  const prev = document.getElementById("preview");

  function saveText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea id="editor" onChange={saveText} defaultValue={text}></textarea>
    </div>
  );
}
