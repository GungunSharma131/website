import React, {useState, useEffect} from "react";


function Mainapp(){
    const [Text, setText] = useState ('');
   
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
    const erase=()=>{
        console.log("Button was Clickable");
        // let newText = Text.innerHTML = '';
        setText('');
    }
    const btnonchange = (Event) => {
        console.log('onchange');
        setText (Event.target.value);
    }
    const handleCopy=()=>{
        console.log('text copied');
        let Text = document.getElementById("floatingTextarea2");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }
    const handleExtraSpace =()=>{
        console.log('Extra Space');
        let newText= Text.split(/[ ]+/);
        setText(newText.join(" "));

        }
        const toggleTheme  =()=>{
            console.log('Theme');
            setText((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

        }
    

    return( 
     
      
        <div className="container " >
         
        <div className="row">
            <div className="col-6">
                <h1 className="head">Word Counting</h1>
                <div className="form-floating mt-5">
                <textarea  value = {Text} className="form-control w-50 text-para" placeholder="Leave a comment here" id="floatingTextarea2"  onChange={btnonchange}></textarea>
                <label className="text-para1">Comments</label>
                <p className="para">{Text.split(" ").length} Words and {Text.length} Characters</p>
                <p className="para">{0.05* Text.split(" ").length} sec time to read</p>
               
            </div>
        </div>
        </div>
      
            <div className="row ">
                
                <div className="col-sm-3">
                    <button type="button" className="btn btn-danger  mt-5 btn1 w-100" onClick={handleUpclick}> UpperCase</button>
                </div>

                <div className="col-sm-3">
                    <button type="button" className="btn btn-danger mt-5  btn1 w-100"  onClick={handleDownclick}>LowerCase</button>
                    
                </div>
               <div className="col-sm-3">
                   
                   <button type="button" className="btn btn-danger mt-5  btn1 w-100"  onClick={handleCopy}>Copy Text</button>
               </div>
                <div className="col-sm-3">
    
                    <button type="button" className="btn btn-danger mt-5  btn1 w-100"  onClick={handleExtraSpace}>Remove Space</button>
    
            </div>
             <div className="col-sm-3">
    
                    <button type="button" className="btn btn-danger mt-5  btn1 w-100"  onClick={erase}>Clear</button>
    
            </div>
            <div className="col-sm-3">
            <button type="button" className="btn btn-danger mt-5  btn1 w-100"  onClick={toggleTheme }>Dark Mode</button>
           
            </div>
            </div>
           
        </div>
     
       
    )
}

export default Mainapp;