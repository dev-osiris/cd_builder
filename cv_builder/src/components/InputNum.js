import React from 'react';

class InputNUM extends React.Component{
    constructor(props){
        super(props);
        let num;
    }


    render() {
        return (
            <div>
                <label htmlFor="input">{this.props.label}</label>
                <br />
                <input id="input-num" type="number" />
            </div>
        );
    }
}

export default InputNUM;