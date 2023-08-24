import React from 'react'
function PassFunAsProps(props) {
    return (
        <div>
            <h1>Pass Function as Props</h1>
            <button onClick={props.data}>Call data function</button>
        </div>
    )

}
export default PassFunAsProps;