import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{   
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
      let ntext = text.toLowerCase();
      setText(ntext);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className ="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="TextBox"  onChange={handleOnChange} value= {text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container">
        <h1>
        Text summery
        </h1>
        <p> {text.split(' ').length}  words and {text.length} charectors</p>
        <p> { 0.008 * text.split(' ').length}  minute </p>
        <h2>
         preview
        </h2>
        <p> {text}</p>

    </div>
      </>
  )
}
