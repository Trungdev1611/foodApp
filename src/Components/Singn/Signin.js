import React from 'react'
import login from './../../assets/image/login.png'
import { useNavigate } from 'react-router-dom'
import './Signin.scss'
import { useDispatch, useSelector } from 'react-redux'
import Infouser from './Infouser'
import { togglelistMenuNav } from './../../redux/SliceReducer/foodlistSlice'
const Signin = () => {
    const navigate = useNavigate()
    const selector = useSelector(state => state.AuthSliceReducer)
    const dispatch = useDispatch()
    function handleGoLogin() {
        dispatch(togglelistMenuNav(false))
        navigate('/login')
    }
    return (
        <>
            {selector.username ? <Infouser name={selector.username} /> :
                <div className="signin" >
                    <img src={login} alt="" className='user-signin' onClick={handleGoLogin} />

                    <div onClick={handleGoLogin}>Sign in</div>
                </div>}
        </>


    )
}

export default Signin