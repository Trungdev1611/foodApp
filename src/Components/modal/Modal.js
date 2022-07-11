import React from 'react'
import './modallogin.scss'
const Modal = () => {
    return (
        <div className='modalLogin-container'>
            <div className='modalLogin'>
                <div className="modalLogin-heading">JOIN WITH US 🚀</div>
                <p className='modalLogin-desc'>You are not signed in. Please sign in to use this feature</p>
                <div className="modalLogin-btn">
                    <span className="modal-button__option cancel">CANCEL</span>
                    <span className="modal-button__option gologin">LOGIN</span>
                </div>
            </div>
        </div>
    )
}

export default Modal