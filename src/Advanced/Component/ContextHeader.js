//ContextHeader.js

import React from 'react';
import { ContextApi } from './ContextApi';
class ContextHeader extends React.Component {

    render() {

        return (

            <ContextApi.Consumer >
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color }}>Hello, This is Header Page</h1>
                    )

                }
            </ContextApi.Consumer>

        )
    }
}
export default ContextHeader;