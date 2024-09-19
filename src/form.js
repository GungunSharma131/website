function Form(){
    return(
        <div>
            <div className="main-section">
            <form>
                <h2 className="main-head">Enquiry Form</h2>
            <label className="lab-sec">FristName*</label><br/>
            <input  className="main-sec" type="text" name="fristname" placeholder="Enter Your FirstName"/><br/>

            <label className="lab-sec">LastName*</label><br/>  
            <input  className="main-sec" type="text" name="lastname" placeholder="Enter Your LastName"/>

            <label className="lab-sec">Message*</label><br/>
            <textarea name="comment" form="usrform" placeholder="Enter text here..."></textarea>

                <button className="btn">Submit</button>
                <button className="btn1">Reset</button>

            </form>
            </div>
            

        </div>

    )
}
export default Form;