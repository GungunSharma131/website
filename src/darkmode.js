import React, { useState } from 'react';
import './App.css';

function Dark(){
  const[New, setNew] = useState({
    backgroundColor : "White",
    color : "black"

  });

const[Textbtn,setTextbtn]= useState("Enable dark Mode");

const darkmode = () =>{
  if(New.color === "black"){
    setNew(
      {
        backgroundColor : "black",
        color : "white"
      }
    )
    setTextbtn("Enable light mode")

  }

  else{
    setNew({
      color:"black",
      backgroundColor:"white"
  })
  setTextbtn("Enable dark Mode");

}
}
return(

  
  <div style={New}>
  <button onClick={darkmode} type="button" className="btn btn-primary">{Textbtn}</button>
  </div>
 
)
}
export default Dark;
