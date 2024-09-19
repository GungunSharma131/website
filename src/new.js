import React, {useState} from "react";
function Newapp(){
    const[Profile , setProfile] = useState ('');
    const[count , setcount] = useState (0);
        
    return(
        <>
        
        <input type="text" value={Profile} placeholder="Enter Your Name" onChange={(a) => setProfile(a.target.value)}/>
        <p>Your Name is {Profile}</p>

        <button onClick={() => setcount(count+1)}>Value</button>
        <p>Your Value is {count}</p>
        

        </>
    )
}

export default Newapp;