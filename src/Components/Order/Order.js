import React from 'react'
import step1 from './../../assets/image/step-1.jpg'
import step2 from './../../assets/image/step-2.jpg'
import step3 from './../../assets/image/step-3.jpg'
import step4 from './../../assets/image/step-4.jpg'
import arrow1 from './../../assets/image/arrow-1.png'
import arrow2 from './../../assets/image/arrow-2.png'
import arrow3 from './../../assets/image/arrow-3.png'
import './OrderStyle.scss'
const Order = () => {
    return (
        <section className='order' style={{ marginTop: '10rem' }}>
            <h3 className='order-title'>Order now!</h3>
            <h2 className='order-heading'>How it works</h2>
            <div className="order-step">
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
                        <span>01<br></br>STEP</span>
                    </div>
                </div>

                <div>
                    <div className="delivery">
                        <img src={step3} alt="order-step3" />
                        <img src={arrow3} alt="" className='arrow' />

                        <p>Cash on Delivery</p>
                        <span>01<br></br>STEP</span>
                    </div>
                </div>
                <div>
                    <div className="delivery">
                        <img src={step4} alt="order-step4" />
                        <p>Eat And Enjoy</p>
                        <span>01<br></br>STEP</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order