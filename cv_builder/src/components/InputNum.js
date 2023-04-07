import React from 'react';

class InputNUM extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor="input">{this.props.label}</label>
                <br />
                <input type="number" />
            </div>
        );
    }
}

export default InputNUM;