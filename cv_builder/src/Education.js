import React, { Component } from "react";

class AboutYou extends Component{
    constructor(props){
        super(props);

        this.state = {
            Institution: "",
            Degree: "",
            From: "",
            To: "",
        };
    }

    handleInstitutionChange = (event) => {
        this.setState({
            Institution: event.target.value
        })
    }

    handleDegreeChange = (event) => {
        this.setState({
            Degree: event.target.value
        })
    }

    handleFromChange = (event) => {
        this.setState({
            From: event.target.value
        })
    }

    handleToChange = (event) => {
        this.setState({
            To: event.target.value
        })
    }

    handleSubBtn = (event) => {
        event.target.InnerHTML = "tot";
        //  <div>
        //     <div>{this.state.Institution}</div>
        //     <div>{this.state.Degree}</div>
        //     <div>{this.state.From}</div>
        //     <div>{this.state.To}</div>
        // </div> 
    }


    render(){
        return(
            <div>
                <div>
                    <div className="About-you-section">
                        <div>
                            <div>
                                <label htmlFor="input">Institution</label>
                                <br />
                                <input id="Institution" value={this.state.Institution} onChange={this.handleInstitutionChange} type="text" />
                            </div>

                            <div>
                                <label htmlFor="input">Degree</label>
                                <br />
                                <input id="Degree" value={this.state.Degree} onChange={this.handleDegreeChange} type="text" />
                            </div>
                        </div>

                        <br />
                        <br />

                        <div>
                            <div>
                                <label htmlFor="input">From</label>
                                <br />
                                <input id="From" value={this.state.From} onChange={this.handleFromChange} type="date" />
                            </div>

                            <div>
                                <label htmlFor="input">To</label>
                                <br />
                                <input id="To" value={this.state.To} onChange={this.handleToChange} type="date" />
                            </div>
                        </div>

                        <div>
                            <button className="submit-btn" onClick={this.handleSubBtn}>Submit</button>
                        </div>  
                    </div>

                        
                        
                </div>
            </div>
        );
    }
}

export default AboutYou;