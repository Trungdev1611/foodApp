import React from 'react'
import './Infouser.scss'
import { logout } from './../../redux/SliceReducer/AuthSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie';
const Infouser = (props) => {
    const cookies = new Cookies();
    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(logout())
        cookies.remove('accessToken', { path: '/' })

    }

    return (
        <div className="info-user" >


            <div className="avartar-user">
                {props.name[0].toUpperCase()}
            </div>

            <div className='user-options'>
                {props.name}

            </div>
            <ul className="user-options__dropdown">
                <li className="user-options__item">My acount</li>
                <li className="user-options__item">My wishlist</li>
                <li className="user-options__item"
                    onClick={handleLogout}
                >Log out</li>

            </ul>
        </div>

    )
}

export default Infouser