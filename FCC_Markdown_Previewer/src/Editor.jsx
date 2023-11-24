import React, { useEffect } from "react";
import { Marked, marked } from "marked";
export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");
  const prev = document.getElementById("preview");

// will setting editor and preview text to state make it easier in long run?
  function saveText(event) {
    setText(event.target.value);
    prev.innerHTML = marked.parse(text);
    // console.log(text);
  }

// User story #5: trying to set the default editor text to be html markdown

  // useEffect(() => {
  //   editor.innerHTML = marked.parse(text);
  //   prev.innerHTML = marked.parse(text);
  // }, [text]);

  return (
    <div>
      <textarea id="editor" onChange={saveText}></textarea>
      <div>hi ross</div>
    </div>
  );
}
