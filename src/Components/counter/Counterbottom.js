import React from 'react'
import './counterbottom.scss'
import useCounter from './Usecounter'
const Counterbottom = () => {
    return (

        <div className='counter-bottom'>
            {console.log('counterbottom')}
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">
                    {useCounter(0, 16, 585)}+
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">
                    {useCounter(0, 123, 6526)}+
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">
                    {useCounter(0, 2, 90)}
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">
                    {useCounter(0, 1, 35)}
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
        </div>
    )
}

export default Counterbottom