import React from 'react'
import Buttonorder from './../../Header/buttonorder'
import './bestfood.scss'
const Bestfood = () => {
    return (
        <section className='bestfood' style={{ margin: '6rem 0' }}>
            <h4 className='bestfood-title'>Best food</h4>
            <h2 className='bestfood-heading'>Super delicious Steak <span>Hamburger</span></h2>
            <span>$25.00</span>
            <div className="bestfood-btn">
                <Buttonorder />

            </div>
        </section>
    )
}

export default Bestfood