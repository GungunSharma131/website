import React,{ useState } from "react"
function Allapp(){
    const [Text, setText] = useState('');
    const handleUpclick=()=>{
        console.log("Button was Clickable");
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleDownclick=()=>{
        console.log("Button was Clickable");
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const btnonchange = (Event) => {
        console.log('onchange');
        setText (Event.target.value);
    }
    const erase=()=>{
        console.log("Button was Clickable");
        setText('');
    }

    const btnItalic = () => {
        console.log('btn italic');
        let newText = Text.styles.Isitalic();
        setText(Text === 'italic');
    }

    return(
        <>
         <div className="container">
         <div className="form-floating mt-5">
        <textarea  value = {Text} className="form-control w-50" placeholder="Leave a comment here" id="floatingTextarea2"  onChange={btnonchange} ></textarea>
        <label >Comments</label>
        </div>
        <button type="button" className="btn btn-danger mt-5 w-50" onClick={handleUpclick}>Click Here for UpperCase</button>
        <button type="button" className="btn btn-danger mt-5 w-50"  onClick={handleDownclick}>Click Here for LowerCase</button>
        <button type="button" className="btn btn-danger mt-5 w-50"  onClick={btnItalic}>Italic</button>
        <button type="button" className="btn btn-danger mt-5 w-50"  onClick={erase}>Clear</button>
        
     
           
        
         </div>
        
        </>
    )
}
export default Allapp;