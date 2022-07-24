import React from 'react'
import step1 from './../../../assets/image/step-1.jpg'
import step2 from './../../../assets/image/step-2.jpg'
import step3 from './../../../assets/image/step-3.jpg'
import step4 from './../../../assets/image/step-4.jpg'
import arrow1 from './../../../assets/image/arrow-1.png'
import arrow2 from './../../../assets/image/arrow-2.png'
import arrow3 from './../../../assets/image/arrow-3.png'
import { useRef, useEffect } from 'react'
import gsap from "gsap/all";
import './OrderStyle.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Order = () => {
    const titleRef = useRef()
    const textRef = useRef()
    const el = useRef()
    const q = gsap.utils.selector(el);
    useEffect(() => {
        const heading = titleRef.current

        gsap.fromTo(heading, { x: -100 }, { x: 0, y: 0, duration: 4, scrollTrigger: { trigger: heading, start: "-50 bottom" } })
        gsap.fromTo(textRef.current, { x: 100 }, { x: 0, duration: 4, scrollTrigger: { trigger: heading, start: "-50 bottom" } })
        gsap.from(q(".delivery"), { y: 100, duration: 2, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".delivery"), start: "-50 bottom" } });
    }, [q])
    return (
        <section className='order' style={{ marginTop: '7rem' }}>
            <h3 className='order-title' ref={titleRef}>Order now!</h3>
            <h2 className='order-heading' ref={textRef}>How it works</h2>
            <div className="order-step" ref={el}>
                <div>
                    <div className="delivery">
                        <img src={step1} alt="order-step1" />
                        <img src={arrow1} alt="" className='arrow' />

                        <p>Choose Your Favorite</p>
                        <span>01<br></br>STEP</span>
                    </div>
                </div>

                <div>
                    <div className="delivery">
                        <img src={step2} alt="order-step2" />
                        <img src={arrow2} alt="" className='arrow' />
                        <p>We Deliver Your Meals</p>
                        <span>02<br></br>STEP</span>
                    </div>
                </div>

                <div>
                    <div className="delivery">
                        <img src={step3} alt="order-step3" />
                        <img src={arrow3} alt="" className='arrow' />

                        <p>Cash on Delivery</p>
                        <span>03<br></br>STEP</span>
                    </div>
                </div>
                <div>
                    <div className="delivery">
                        <img src={step4} alt="order-step4" />
                        <p>Eat And Enjoy</p>
                        <span>04<br></br>STEP</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order