import React from "react";
import ReactMarkdown from "react-markdown";

export default function Preview({ text }) {
  return (
      <ReactMarkdown>{text}</ReactMarkdown>
  );
}
//
