import React, { Component } from "react";

class AboutYou extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            mobile: "",
            isEditOn: true,
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleValueChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleMobChange = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }

    handleSubBtn = () => {
        this.setState({
            isEditOn: false
        })
    }

    handleEditClick = () => {
        this.setState({
            isEditOn: true
        })
    }

    render(){
        return(
            <div>
                <div>
                    { this.state.isEditOn ? (
                        <div className="About-you-section">
                            <div>
                                <div>
                                    <label htmlFor="input">First name</label>
                                    <br />
                                    <input id="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} type="text" />
                                </div>

                                <div>
                                    <label htmlFor="input">Last name</label>
                                    <br />
                                    <input id="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} type="text" />
                                </div>
                            </div>

                            <br />
                            <br />

                            <div>
                                <div>
                                    <label htmlFor="input">Age</label>
                                    <br />
                                    <input id="age" value={this.state.age} onChange={this.handleValueChange} type="number" />
                                </div>

                                <div>
                                    <label htmlFor="input">Mobile</label>
                                    <br />
                                    <input id="mobNumber" value={this.state.mobile} onChange={this.handleMobChange} type="number" />
                                </div>
                            </div>

                            <div>
                                <button className="submit-btn" onClick={this.handleSubBtn}>Submit</button>
                            </div>  
                        </div>

                    ) : (
                        <div>
                            <div>{this.state.firstName} {this.state.lastName}</div>
                            <div>{this.state.age}</div>
                            <div>{this.state.mobile}</div>
                            
                            <button className="submit-btn" onClick={this.handleEditClick}>Edit</button>
                        </div>
                    ) }
                        
                </div>
            </div>
        );
    }
}

export default AboutYou;