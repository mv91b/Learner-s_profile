import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearOnClick = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="TextBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(29 28 28)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
            aria-label="Enter your text here"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
          aria-label="Convert text to uppercase"
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
          disabled={text.length === 0}
          aria-label="Convert text to lowercase"
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyClick}
          disabled={text.length === 0}
          aria-label="Copy text"
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleRemoveExtraSpaces}
          disabled={text.length === 0}
          aria-label="Remove extra spaces"
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-danger mx-2 my-1"
          onClick={handleClearOnClick}
          disabled={text.length === 0}
          aria-label="Clear text"
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=> {return element.length !==0} ).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').filter((element)=> {return element.length !==0} ).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
      </div>
    </>
  );
}
