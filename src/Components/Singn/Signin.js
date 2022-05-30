import React from 'react'
import login from './../../assets/image/login.png'
import './Signin.scss'
const Signin = () => {
    return (
        <div className="login">
            <img src={login} alt="" className='user-signin' />
            Sign in
        </div>
    )
}

export default Signin