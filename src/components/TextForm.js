import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success")
    }
    const handleDownClick=()=>{
        // console.log("uppercase is clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","Success")
    }
    const handleClearClick=()=>{
        // console.log("clear text is clicked");
        let newText="";
        setText(newText);
        props.showAlert(" Text Cleared ","Success")
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]= useState ('Enter text here');
        return (<>
        <div className='conatiner' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#02012d':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>Time required to read = {text.split(" ").length *0.008} minutes </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter text to preview"}</p>
        </div>
        </>
    )
}
