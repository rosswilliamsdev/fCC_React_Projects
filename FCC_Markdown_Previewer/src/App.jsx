import { useState } from "react";
import "./App.css";
import Editor from "./Editor.jsx";
import Preview from "./Preview";

function App() {

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

  const [text, setText] = useState(defaultMarkdown);

  return (
    <div>
      <Editor text={text} setText={setText} />
      <Preview text={text} setText={setText} />
    </div>
  );
}

export default App;
