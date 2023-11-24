import React, { useEffect } from "react";
import { Marked, marked } from "marked";
export default function Editor({ text, setText }) {
  const editor = document.getElementById("editor");
  const prev = document.getElementById("preview");

  // will setting editor and preview text to state make it easier in long run?
  function saveText(event) {
    setText(event.target.value);
    prev.innerHTML = marked.parse(event.target.value);
  }

  // User story #5: trying to set the default editor text to be html markdown on page load

  // When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

  const defaultMarkdown = `
    # Welcome #

    ## This is my first go with markdown ##

    [Link](www.google.com)

      <p>Here is a code block</p>

    1. List item one
    2. List item two

    >This is a blockquote

    ![Mountains rule](FCC_Markdown_Previewer/src/assets/matterhorn-BLOG-mountains.png)

    Here is some **bold, bold** text
    `;

  console.log(marked.parse("#Welcome"));

  return (
    <div>
      <textarea
        id="editor"
        onChange={saveText}
        defaultValue={defaultMarkdown}
      ></textarea>
      <div>oh hi mark</div>
    </div>
  );
}
