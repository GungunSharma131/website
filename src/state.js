import React, {useState} from "react";

function Hello(){

    const [Number, setNumber] = useState(100);
    const [Name, setName] = useState(' ');
    

    return(
        <>
         <input type="text" value={Name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
       
         <p>Your Name is {Name}</p>

          <p>Clicked here {Number}</p>
         <button onClick={() => setNumber(Number+1)}>click here</button><br/><br/>

            
        </>
    )
}
export default Hello ;