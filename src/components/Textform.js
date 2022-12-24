import React, { useState } from 'react';


export default function Textform(props) {
  const clearTextarea = () => {
    let newText = ("")
    setText(newText)
    props.onButtonClick("text clear")
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.onButtonClick("Text Upper case")
  }
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.onButtonClick("Text lower Case")
  }
  const handleOnchange = (event) => {

    setText(event.target.value)
  }
  const capitalize = () => {
    let arraytext = text.split(" ");
    let newText = arraytext.map(function (element) {

      let first = element.charAt(0);
      let rem = element.slice(1);
      return first.toUpperCase() + rem.toLowerCase();

    }).join(" ");
    setText(newText);
    props.onButtonClick("Text Capitalize")
    
  }
  const copy =()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.onButtonClick("Text copy")
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className='container-fluid' id="home">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnchange} rows="8"></textarea>

            <button type="button" className="btn btn-outline-success my-3 mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
            <button type="button" className=" btn btn-outline-success my-3 mx-3" onClick={handleloClick} >Convert to LowerCase</button>
            <button type="button" className="btn btn-outline-success my-3 mx-3" onClick={capitalize} >Convert to CapitalizeCase</button>
            <button type="button" className="btn btn-outline-success my-3 mx-3" onClick={clearTextarea}>Clear textarea</button>
            <button type="button" className="btn btn-outline-success my-3 mx-3" onClick={copy}>Copy text</button>
          </div>
        </div>
        <div className="container-fluid my-3">
          <h2>Your text summary</h2>
          <p>  {text.split(" ").length - 1} words and  {text.length} Characters</p>
          <p>{(text.split(" ").length - 1) * 0.008} Minutes required for read this paragraph</p>
          <h2>Preview</h2>
          <p>{text}</p>

        </div>
      </div>
      <hr />
    </>
  )
}
