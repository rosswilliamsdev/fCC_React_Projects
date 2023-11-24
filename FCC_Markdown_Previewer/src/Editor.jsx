import React from "react";

export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");
  const prev = document.getElementById("preview");

  // will setting editor and preview text to state make it easier in long run?
  function saveText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea id="editor" onChange={saveText} defaultValue={text}></textarea>
      <div>oh hi mark</div>
    </div>
  );
}
