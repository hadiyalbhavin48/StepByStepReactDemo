// import React from "react";

// class RenderLifeCycle extends React.Component {
//     render() {
//         console.log('Render', this.props);
//         return (
//             <div>
//                 <h1>Render life cycle Method {this.props.name}</h1>
//             </div>
//         )
//     }

// }

// export default RenderLifeCycle;

// ---------------- Render life cycle Method using props-----------
import React from "react";

class RenderLifeCycle extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "bhavin@123"
        }
    }
    render() {
        console.log('Render', this.state.email);
        return (
            <div>
                <h1>Render life cycle Method </h1>
                <button onClick={() => this.setState({ email: "bhavin@12345" })}>Update Email</button>
            </div>
        )
    }

}

export default RenderLifeCycle;