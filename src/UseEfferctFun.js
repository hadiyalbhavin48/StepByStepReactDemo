import React, { useEffect, useState } from 'react';   // import Hooks

function UseEffectFun(props) {

    useEffect(() => {
        alert('Count is ' + props.count)
        console.log('useEffect with Props');
    }, [props.count, props.data])


    return (
        < div >
            <h1>Count propes: {props.count}</h1>
            <h1>Data propes: {props.data}</h1>

        </div >
    )
}
export default UseEffectFun;
