import React, {useState} from "react";



function About(){
    const[myStyle, setMyStyle] = useState({
      backgroundColor : "yellow",
      color : "black",
     
    });

    const[btnText, SetBtnText] = useState("Enable Light mode");
    
    const toggleStyle = ()=>{
        if(myStyle.color === "black"){
        setMyStyle({ 
            color:"white",
        backgroundColor:"black",
        })
        SetBtnText("Enable light Mode");
    }
    else if(myStyle.color === "white"){
        setMyStyle({
            color:"red",
            backgroundColor:"blue"
        })
        SetBtnText("Enable dark Mode");
    }
    else if(myStyle.color === "red"){
      setMyStyle({
          color:"black",
          backgroundColor:"green"
      })
      SetBtnText("Enable dark Mode");
  }
    else{
      setMyStyle({
        color:"black",
        backgroundColor:"white"
    })
    SetBtnText("Enable dark Mode");

    }

}

    return(
        
       
        <div style={myStyle}>
        <div >

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
        <div className="main-section1" >
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        <h2>Hello My NAME is Gungun Sharma</h2>



        </div>


        
        
        </div>
      
    )

}

export default About;