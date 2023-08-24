
import React, { useEffect, useRef } from 'react'
function PriviousPropsHooks(props) {
    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count;   // store last value
    })
    const previusProps = lastVal.current
    return (

        <div>
            <h1>Count is  : {props.count}</h1>
            <h1>previous Props is  : {previusProps}</h1>

        </div>
    )
}

export default PriviousPropsHooks;