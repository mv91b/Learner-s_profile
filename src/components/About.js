// import React, { useState } from 'react'


export default function About(props) {
  // const [mystyle, setMyStyle] =useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let mystyle ={
    color: props.mode === 'dark'? 'white': '#42743',
    backgroundColor: props.mode === 'dark'? 'rgb (36 74 104)': 'white',
  }

  return (

    <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>
        <h2>About US</h2>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <strong>Analyze you text</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body" style={mystyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          <strong>Free to Use</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body" style={mystyle}>
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
          <strong>Browser compatible</strong>
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body" style={mystyle}>
          This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </div>
        </div>
      </div>
      {/* <div className="container my-3"> 
      <button className="btn btn-primary" onClick={toggleStyle} type="dark mode"  > {btntext}</button>
      </div> */}
    </div>
  )
}
