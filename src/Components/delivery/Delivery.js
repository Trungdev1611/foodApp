import React from 'react'
import delivery from './../../utils/category-items/small-delivery.svg'
import bigdelivery from './../../assets/image/big-delivery.svg'
import Buttonorder from '../Home/Header/buttonorder'
import './delivery.scss'
const Delivery = () => {
    return (
        <div className='delivery-wrapper'>
            <div className="delivery-left">
                <h4 className='delevery-left__title'>Delivery</h4>
                <h2 className="delivery-left__heading">
                    A Moments Of Delivered <span>On Right Time &#38; Place</span>
                </h2>
                <p className='desc'>Food G is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth
                    Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London
                    inteon.</p>
                <div className='delevery-left__order'>
                    <div className="info">
                        <div className='img-info'><img src={delivery} alt="" /></div>

                    </div>
                    <div className="contact">
                        <p className='contact-name'>Delivery Order Num</p>
                        <p className='contact-phone'>123-59794069</p>
                    </div>
                    <div className="btn">
                        <Buttonorder />

                    </div>

                </div>
            </div>
            <div className="delivery-right">
                <img src={bigdelivery} alt="" />
            </div>
        </div>
    )
}

export default Delivery