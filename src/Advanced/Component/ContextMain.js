//ContextMain.js
import React from 'react';
import { ContextApi } from './ContextApi';
class ContextMain extends React.Component {

    render() {

        return (

            <ContextApi.Consumer >
                {
                    ({ color }) => (
                        <h1 style={{ backgroundColor: color }}>Hello, This is Main Page</h1>
                    )

                }
            </ContextApi.Consumer>

        )
    }
}
export default ContextMain;