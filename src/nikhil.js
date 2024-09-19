import React, {useState, useEffect} from "react";

function Myapp(){
    //   const [main,setMain]= useState(1);

    //   useEffect(() => {
    //     setTimeout(() =>{
    //         setMain((main) => main+1);
    //     }, 1000);
    //   }
    // );

    useEffect(()=>{
        console.log("Use effect component");
    })
    return(
        <>
         <h1>Use ffect </h1>        
        </>
    )
}


export default Myapp;