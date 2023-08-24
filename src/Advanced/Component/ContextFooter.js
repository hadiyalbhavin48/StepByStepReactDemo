//ContextFooter.js

import React from 'react';
import { ContextApi } from './ContextApi';
class ContextFooter extends React.Component {

    render() {

        return (

            <ContextApi.Consumer >
                {
                    ({ color }) => (
                        <h1 className='footer' style={{ backgroundColor: color }}>Hello, This is Footer Page</h1>
                    )

                }
            </ContextApi.Consumer>

        )
    }
}
export default ContextFooter;