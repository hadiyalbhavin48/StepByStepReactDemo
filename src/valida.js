import React, { useState } from 'react'

function Valida() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    function loginHandle(e) {
        // alert('hello');
        if (user.length < 3 || pass.length < 3) {
            alert('type correct values')
        }
        else {
            alert('all Good')
        }

        e.preventDefault();
    }

    function userHander(e) {
        let item = e.target.value;
        if (item.length < 3) {
            // console.log('invalid');
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
        setUser(item)
        // console.log(e.target.value.length)
    }

    function passwordHander(e) {
        let item = e.target.value;
        if (item.length < 3) {
            // console.log('invalid');
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        setPass(item)
        // console.log(e.target.value.length)
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit={loginHandle}>
                <input type='text' placeholder='enter user id' onChange={userHander} />
                {userErr ? <span>User Not Valid</span> : ""}
                <br /> <br />
                <input type='password' placeholder='enter user password' onChange={passwordHander} />
                {passErr ? <span>Invalid password</span> : ""}
                <br /> <br />

                <button type='submit'>Login</button>
            </form>

        </div>

    )
}
export default Valida;