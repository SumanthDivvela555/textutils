import React, {useState} from 'react'


export default function TextForm(props) {
   
const [text,setText] = useState("");

  const handleUpClick=()=>{
    // console.log("UpperCase Was Clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success");
  }

  const handleLoClick=()=>{
    // console.log("UpperCase Was Clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower case","success");
  }

  const handleclearClick=()=>{
    let newText="";
    setText(newText);
  }

  const handleOnChange=(event)=>{
    // console.log("onchange ");
    setText(event.target.value)
  }

  const handleAltClick=()=>{

  }

  const handleInvClick=()=>{
    
  }

  const handleDownClick=()=>{
    
  }

  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  }

  const handleRemoveClick=()=>{
    let newText = text.replace(/\s+/g," ");
    // newText=newText.trim();
    setText(newText);
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example Textarea</label>
        <textarea style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8" className="form-control"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to Lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleclearClick}>Clear text</button>

      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleAltClick}>AlTeRNaTiNg CaSe</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleInvClick}>InVeRse CasE</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>Download Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopyClick}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleRemoveClick}>Remove Extra space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        {/* <p>{text.split(" ").length}-words and {text.length}-characters</p> */}
        <p>Words = {text.split(/\s+/).filter( (elem) => elem!=="").length} And Characters = {text.length}</p>
        <p>time to read: {0.008 * text.split(" ").filter( (elem) => elem!=="").length}</p>
        <h2>preview: </h2>
        <p>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
    </>
  );
}
 