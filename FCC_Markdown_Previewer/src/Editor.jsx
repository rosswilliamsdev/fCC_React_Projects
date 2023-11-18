import React, { useEffect } from "react";
import { marked } from 'marked'
export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");

  function saveText(event) {
    let prev = document.getElementById('preview')
    prev.innerHTML = marked.parse(event.target.value)
    // setText(event.target.value);
    // console.log(text);
  }

  return (
    <div>
      {/* this onChange doesn't work */}
      <textarea id="editor" onChange={saveText}></textarea>
      <div>hi ross</div>
    </div>
  );
}
