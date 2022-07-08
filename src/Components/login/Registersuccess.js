import React from 'react'
import './register.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

const Registersuccess = () => {
    const navigate = useNavigate()
    return (
        <div className='register-container'>
            <div className='register-success'>
                <div className="register-top">
                    <div >
                        <CheckCircleOutlineIcon className="register-top__icon" />
                    </div>
                    <div className="register-top__notify">
                        SUCCESS
                    </div>
                </div>
                <div className="register-bottom">
                    <div className="register-bottom-notify">
                        Congratulations, your account has been successfully created
                    </div>
                    <button className="register-bottom__btn" onClick={() => navigate('/login')}>
                        Continue
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Registersuccess