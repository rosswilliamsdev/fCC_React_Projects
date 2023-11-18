import React, { useEffect } from "react";

export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");

  return (
    <div>
      {/* this onChange doesn't work */}
      <textarea id="editor" onChange={(e) => setText(e.value)}></textarea>
    </div>
  );
}
