import React, { useEffect } from "react";
import { Marked, marked } from "marked";
export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");
  const prev = document.getElementById("preview");

  // will setting editor and preview text to state make it easier in long run?
  function saveText(event) {
    setText(event.target.value);
    prev.innerHTML = marked.parse(text);
  }

  // User story #5: trying to set the default editor text to be html markdown on page load
  // useEffect(() => {
  //   editor.innerHTML = marked.parse(text);
  // });

  return (
    <div>
      <textarea id="editor" onChange={() => saveText}></textarea>
    </div>
  );
}
