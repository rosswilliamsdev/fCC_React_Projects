import { useState } from "react";
import "./App.css";
import Editor from "./Editor.jsx";
import Preview from "./Preview";

function App() {
  const [text, setText] = useState("<h1>Hey there</h1>");

  return (
    <div>
      <Editor text={text} setText={setText} />
      <Preview text={text} setText={setText} />
    </div>
  );
}

export default App;
