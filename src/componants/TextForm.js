import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{   
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
      let ntext = text.toLowerCase();
      setText(ntext);
      props.showAlert("converted to lowercase", "success");
    }
    const handleClearOnClick = ()=>{
      let clearText = ('');
      setText(clearText);
      props.showAlert("text has been cleared", "success");
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className ="container" style={{backgroundColor: props.mode==='dark'?'#333':'white', color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="TextBox"  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#555':'white', color: props.mode==='dark'?'white':'black'}} value= {text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearOnClick}>Clear Text</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>
        Text summery
        </h1>
        <p> {text.split(' ').length}  words and {text.length} charectors</p>
        <p> { 0.008 * text.split(' ').length}  minute </p>
        <h2>
         preview
        </h2>
        <p> {text.length>0?text:"Enter something into the textbox to preview"}</p>

    </div>
      </>
  )
}
