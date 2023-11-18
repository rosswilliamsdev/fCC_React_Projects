import React, { useEffect } from "react";

export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");

  function saveText(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div>
      {/* this onChange doesn't work */}
      <textarea id="editor" onChange={saveText}></textarea>
      <div>hi ross</div>
    </div>
  );
}
