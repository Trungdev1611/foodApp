import React from 'react'
import './price.scss'
import { useDispatch } from 'react-redux'
import { sortPrice } from './../../../redux/SliceReducer/foodlistSlice'
// import { Link } from 'react-router-dom'
const Price = (props) => {
    const dispatch = useDispatch()
    function handleChange(e) {
        console.log(JSON.parse(e.target.value))
        dispatch(sortPrice(JSON.parse(e.target.value)))
    }
    return (
        <div className='price'>
            <div className="price-heading">
                Price
            </div>
            <ul className="price-list">
                {/* <Link to={valueRadio}> */}
                <li className='price-list__item'>
                    <input type="radio" name="price"
                        value='{"price_lte":"100"}'
                        onChange={handleChange}

                        id="price3" /><span>Under $100</span>
                </li>
                {/* </Link> */}

                {/* <Link to={valueRadio}> */}
                <li className='price-list__item'>
                    <input type="radio" name="price"
                        value='{"price_gte":"50", "price_lte":"100"}'
                        onChange={handleChange}
                        id="price1" /><span>$50 to $100</span>
                </li>
                {/* </Link > */}
                <li className='price-list__item'>
                    <input type="radio" name="price"
                        value='{"price_lte":"50"}'
                        onChange={handleChange}
                        id="price2" /><span>Under $50</span>
                </li>
                {/* <Link to={valueRadio}> */}
                <li className='price-list__item'>
                    <input type="radio" name="price"
                        value='{"price_gte":"100"}'
                        onChange={handleChange}
                    /><span>Above $100</span>
                </li>
                {/* </Link > */}
            </ul>
        </div>
    )
}

export default Price