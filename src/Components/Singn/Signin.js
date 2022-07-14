import React from 'react'
import login from './../../assets/image/login.png'
import { useNavigate } from 'react-router-dom'
import './Signin.scss'
import { useDispatch, useSelector } from 'react-redux'
import Infouser from './Infouser'
import { togglelistMenuNav } from './../../redux/SliceReducer/foodlistSlice'
import Cookies from 'universal-cookie';

const Signin = () => {
    const navigate = useNavigate()
    const selector = useSelector(state => state.AuthSliceReducer)
    const dispatch = useDispatch()
    const cookies = new Cookies();
    function handleGoLogin() {
        dispatch(togglelistMenuNav(false))
        navigate('/login')
    }
    return (
        <>
            {(selector.username && cookies.get('accessToken')) ? <Infouser name={selector.username} /> :
                <div className="signin" >
                    <img src={login} alt="" className='user-signin' onClick={handleGoLogin} />

                    <div onClick={handleGoLogin}>Sign in</div>
                </div>}
        </>


    )
}

export default Signin