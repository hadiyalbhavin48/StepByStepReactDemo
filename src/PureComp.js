
// -----------Pure Component using state-----------

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {


    render() {
        return (
            <div className="App">
                {/* <Counter count={this.state.count} /> */}
                <h1>Pure Component Props {this.props.count}</h1>
            </div>
        );
    }
}

export default PureComp;
