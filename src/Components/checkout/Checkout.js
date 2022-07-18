import React from 'react'
import Headerfood from '../bestfood/Header/Headerfood'
import Footer from './../footer/Footer'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CheckIcon from '@mui/icons-material/Check';
import './checkout.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const selector = useSelector(state => state.CartReducer)
  const navigate = useNavigate()
  console.log('selectorloading:::', selector.loading)
  if (selector.loading) {
    console.log("LOADDDDDDDDDDDD111")
    return <h1>Loading...</h1>
  }



  return (
    <div>
      <Headerfood />
      <div className="checkout">
        <div className="checkout-icon"><CheckIcon className='icon-succeed' /></div>
        <h4 className='checkout-msg'>Your purchase was successfull 🍔</h4>
        <p onClick={() => navigate('/listfood')}><span>Buy more</span><CallMissedOutgoingIcon className='icon-going' /></p>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout