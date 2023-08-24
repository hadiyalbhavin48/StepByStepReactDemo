import React from 'react'

class CompWillUnmount extends React.Component {
    componentWillUnmount() {
        alert('componentWillUnmount call')
        console.log('componentWillUnmount call');
    }
    render() {
        console.log('render')
        return (
            <div>

                <h1>componentWillUnmount life cycle Method </h1>
            </div>
        )
    }
}

export default CompWillUnmount;
