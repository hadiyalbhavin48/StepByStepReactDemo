import React, { Component } from 'react';

class propsClass extends Component {

    render() {
        return (

            <div style={{ backgroundColor: 'red', margin: 40 }
            }>
                console.log(p)
                < h1 > Propes class Component : {this.props.name}</h1 >
                <h1>Email : {this.props.email}</h1>
            </div >
        )
    }

}

export default propsClass;