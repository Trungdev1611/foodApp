import React from 'react'
import './Infouser.scss'

const Infouser = (props) => {



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
                    onClick={props.handleLogout}
                >Log out</li>

            </ul>
        </div>

    )
}

export default Infouser