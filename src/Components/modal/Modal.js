import React from 'react'
import { useNavigate } from 'react-router-dom'
import './modallogin.scss'
import { useDispatch } from 'react-redux'
import { forcedLogin } from '../../redux/SliceReducer/CartUserSlice'
const Modal = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function disableModel(e) {
        if (e.target === e.currentTarget) {
            dispatch(forcedLogin())
        }

    }
    return (
        <div className='modalLogin-container' onClick={(e) => disableModel(e)}>
            <div className='modalLogin' >
                <div className="modalLogin-heading">JOIN WITH US 🚀</div>
                <p className='modalLogin-desc'>You are not signed in. Please sign in to use this feature</p>
                <div className="modalLogin-btn">
                    <span className="modal-button__option cancel"
                        onClick={(e) => disableModel(e)}
                    >CANCEL</span>
                    <span className="modal-button__option gologin"
                        onClick={(e) => {
                            navigate('/login')
                            dispatch(forcedLogin())
                        }}
                    >LOGIN</span>
                </div>
            </div>
        </div>
    )
}

export default Modal