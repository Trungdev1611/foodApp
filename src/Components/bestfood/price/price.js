import React from 'react'
import './price.scss'
const Price = () => {
    return (
        <div className='price'>
            <div className="price-heading">
                Price
            </div>
            <ul className="price-list">
                <li className='price-list__item'>
                    <input type="radio" name="price" id="selectPrice" /><span>Under $100</span>
                </li>
                <li className='price-list__item'>
                    <input type="radio" name="price" id="selectPrice" /><span>$50 to $100</span>
                </li>
                <li className='price-list__item'>
                    <input type="radio" name="price" id="selectPrice" /><span>Under $50</span>
                </li>
                <li className='price-list__item'>
                    <input type="radio" name="price" id="selectPrice" /><span>Above $100</span>
                </li>
            </ul>
        </div>
    )
}

export default Price