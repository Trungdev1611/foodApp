import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { hideNotify } from '../../redux/SliceReducer/AuthSlice';
import './Toast.scss'
const Toast = () => {
  const dispatch = useDispatch()
  return (
    <div id="toast">
      <div className='toast-item login-success'>

        <CheckCircleOutlineIcon className='toast-icon' />

        <div className="toast-message">
          <h3 className='toast-message__heading'>Welcome</h3>
          <p className='toast-messgae__desc'>Login successful</p>
        </div>

        <ExitToAppIcon className='toast-close'
          onClick={() => dispatch(hideNotify())}
        />

      </div>
    </div>

  )
}

export default Toast