import React from "react";
import ReactMarkdown from "react-markdown";

export default function Preview({ text }) {
  return (
    <div id="preview">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}
//
