import React, { useState } from 'react'


export default function TextForm(props) {
    // let disabled=true
    const [text, setText] = useState('');
    // setText("This new text here!");
    const handleUpClick = () => {
        console.log("Capital latter was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Coverted to UpperCase !","success")
    }
    const handleLowClick = () => {
        console.log("Capital latter was clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Coverted to Lowercase !","success")
    }
    const handleOnChange = (event) => {
        console.log("onchange");
        setText(event.target.value)
    }
    const handleClearClick = (event) => {
        let newText = ' ';
        setText(newText)
        props.showAlert("Text has been cleared !","success")
    }
    const handleCopyClick = () => {
        console.log("Text Copied");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !","success")
    }
    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove text!","success")
    }
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
                <h2 className='my-4'>{props.heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4" 
                    style={{backgroundColor: props.mode ==='dark'?'black' : 'white', 
                    color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0}     className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Capital Letter</button>

                <button  disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Small Letter</button>
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
                
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0}   className='btn btn-primary mx-2 my-2' onClick={handleRemoveClick}>Remove ExtraSpace</button>
            </div>
            <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>

                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} charcters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read time</p>
                <h3>Preveiw</h3>
                <p>{text.length>0?text:"Enter Something in Above  Text to Preveiw"}</p>
            </div>
        </>

    )
}


