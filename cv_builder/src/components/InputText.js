import React from 'react';

class InputText extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor="input">{this.props.label}</label>
                <br />
                <input type="text" />
            </div>
        );
    }
}

export default InputText;