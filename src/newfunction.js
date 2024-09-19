import PropTypes from 'prop-types'

function Myprofile(props){
    return(

        <>
        <h1>My Name is {props.Title},And I am {props.age},I am a {props.coder} developer.</h1>
        {/* <h2>My Name is {props.Title},And I am {props.age},I am a {props.coder} developer.</h2>
        <h3>My Name is {props.title},And I am {props.age},I am a {props.coder} developer.</h3>
        <h4>My Name is {props.Title},And I am {props.age},I am a {props.coder} developer.</h4>
        <h5>My Name is {props.Title},And I am {props.age},I am a {props.coder} developer.</h5>
        <h6>My Name is {props.Title},And I am {props.age},I am a {props.coder} developer.</h6> */}
         

            <h1>This is a IT student</h1>
            
        
        </>

    )
}

Myprofile.propTypes ={
    Title : PropTypes.string.isRequired,
};
  




export default Myprofile;
