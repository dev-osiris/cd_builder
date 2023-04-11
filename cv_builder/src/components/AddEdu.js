import React, {Component} from "react";
import Education from "./Education";

class AddEdu extends Component{
    constructor(props){
        super(props);
        {console.log("in addedu.js")}
    }
    
    render(){
        let {open} = this.props;
        console.log(open)
        return(
            <>
                {
                    open && (
                        <div>
                            {/* <h1>fuck</h1>
                            {open = false} */}
                            <Education />
                        </div>)
                }
            </>
        );
    }
}

export default AddEdu;