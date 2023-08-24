import React, { forwardRef } from 'react'
function FordRef(p, ref) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(FordRef);