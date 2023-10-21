import React, {useState} from 'react'
export default function TextForm(props) {
  const upperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.createAlert("Converted","success");
  }
  const lowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.createAlert("Converted","success");
  }
  const clear = ()=>{
    let newText = "";
    setText(newText);
    props.createAlert("Cleared","success");
  }
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.createAlert("Adjust volume","success");
  }
  const handleCopy = () =>{
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.createAlert("Text Copied","success");
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.createAlert("Removed","success");
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode === "dark"?"white":"black"}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"black":"white", color: props.mode === "dark"?"white":"black"}} id="textBox" rows="7"></textarea>
        </div>
        <button className="btn btn-dark mx-1 my-1" onClick={upperCase}>To Uppercase</button>
        <button className="btn btn-dark mx-1 my-1" onClick={lowerCase}>To Lowercase</button>
        <button className="btn btn-dark mx-1 my-1" onClick={clear}>Clear</button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    </div>
    <div style={{color: props.mode === "dark"?"white":"black"}} className="container my-3">
      <h2>Text summary</h2>
      <p>{text.split(" ").filter((ele)=>{return ele.length !== 0}).length} words, {text.length} characters</p>
      <p>{0.008 *  text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in textarea to preview here"}</p>
    </div>
    </>
  )
}
          

