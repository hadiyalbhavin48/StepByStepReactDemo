//PropsUser.js

import React from "react";

const ReduxUser = (p) => {
    console.log(p.data.name);
    const { data } = p;
    return (
        <div>
            <h1>User Component</h1>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
        </div>
    )
}
export default ReduxUser;