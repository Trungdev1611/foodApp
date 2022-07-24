import React, { useRef, useEffect } from 'react'
import delivery from './../../../utils/category-items/small-delivery.svg'
import bigdelivery from './../../../assets/image/big-delivery.svg'
import Buttonorder from '../../Header/buttonorder'
import './delivery.scss'
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Delivery = () => {
    const el = useRef()
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.from(q(".delevery-left__title"), { delay: 0.5, x: -50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".delevery-left__title"), start: "-100 bottom" } });
        gsap.from(q(".delivery-left__heading"), { delay: 1.5, x: 50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".delivery-left__heading"), start: "-100 bottom" } });
        gsap.from(q(".desc"), { delay: 1.5, y: 50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".desc"), start: "-100 bottom" } });
        gsap.from(q(".img-delivery"), { delay: 2, x: 100, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".img-delivery"), start: "-100 bottom" } });
        gsap.from(q(".contact"), { delay: 2.5, y: 50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".contact"), start: "-100 bottom" } });
    }, [q])
    return (
        <div className='delivery-wrapper' ref={el}>
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
                        <div className='img-info'><img src={delivery} alt="" className='img-delivery' /></div>

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