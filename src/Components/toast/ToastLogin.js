import React, { useState, useEffect } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Toast.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = ({ type }) => {
  const [typeMessage, setTypemessage] = useState({
    background: 'success',
    contentHeading: 'Welcome',
    contentDesc: 'Login successful'
  })
  useEffect(() => {
    if (type) {
      setTypemessage(type)
    }



  }, [type])

  return (

    <div className={`toast-item ${typeMessage.background}`}>
      <CheckCircleOutlineIcon className='toast-icon' />
      <div className="toast-message">
        <h3 className='toast-message__heading'>{typeMessage.contentHeading}</h3>
        <p className='toast-messgae__desc'>{typeMessage.contentDesc}</p>
      </div>
      <ExitToAppIcon className='toast-close' />

    </div>
  )
}



export const ToastAddcart = () => {

  return (

    <ToastContainer
      position='top-right'
      autoClose={1500}

      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      progressClassName="toastProgress"
      bodyClassName="toastBody"
    />





  )
}

export default Toast