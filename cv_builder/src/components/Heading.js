import React from 'react';

class Heading extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className='mainHeading'>
                <hr />
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default Heading;