import React from 'react'
import login from './../../assets/image/login.png'
import { useNavigate } from 'react-router-dom'
import './Signin.scss'
const Signin = () => {
    const navigate = useNavigate()
    function handleGoLogin() {
        navigate('/login')
    }
    return (
        <div className="login" >
            <img src={login} alt="" className='user-signin' onClick={handleGoLogin} />
            <div onClick={handleGoLogin}>Sign in</div>
        </div>
    )
}

export default Signin