import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const handleupclick=() =>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UPPERCASE","Success")
    }
    const handleOnChange=(event) =>{
        console.log("onchange");
        setText(event.target.value)
    }
    const [text,setText]= useState("Enter Text here");
  return (
    <> 
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">       
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Click to know about back exercises</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Exercises summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <h3>Preview</h3>
            {text}
        </div>
    </>

  )
}
