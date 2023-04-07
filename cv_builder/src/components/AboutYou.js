import React, { Component } from "react";

class AboutYou extends Component{
    constructor(){
        super();
    }

    handleSubAboutYou = () => {
 
        let AboutYouSec = document.getElementsByClassName("About-you-section")[0];
        AboutYouSec.innerText = 

            `${document.getElementById("firstName").value}\n` +
            `${document.getElementById("lastName").value}\n` +
            `${document.getElementById("age").value}\n` +
            `${document.getElementById("mobNumber").value}`;
    }

    render(){
        return(
            <>
                <div className="About-you-section">
                    <div>
                        <div>
                            <label htmlFor="input">First name</label>
                            <br />
                            <input id="firstName" type="text" />
                        </div>

                        <div>
                            <label htmlFor="input">Last name</label>
                            <br />
                            <input id="lastName" type="text" />
                        </div>
                    </div>

                    <br />
                    <br />
                    <div>
                        <div>
                            <label htmlFor="input">Age</label>
                            <br />
                            <input id="age" type="number" />
                        </div>

                        <div>
                            <label htmlFor="input">Mobile</label>
                            <br />
                            <input id="mobNumber" type="number" />
                        </div>
                    </div>
                </div>


                <div>
                    <button className="submit-btn" onClick={this.handleSubAboutYou}>Submit</button>
                </div>
            </>
        );
    }
}

export default AboutYou;