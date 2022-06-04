import React from 'react'
import './productItem.scss'
const ProductItem = (props) => {
  return (
    <div className='product-item'>
      <div className="product-container">
        <div className="product-top">
          <img src={props.data.src} alt="product-item" className='product-top__img' />

        </div>
        <button className='product-top__btn' >BEST DEAL<span></span></button>
        <div className="product-bottom">
          <h3 className='product-bottom__heading'>{props.data.heading}</h3>
          <p className='product-bottom__desc'>{props.data.desc}</p>
          <h3 className='product-bottom__price'>{props.data.price}</h3>
        </div>
      </div>

    </div>
  )
}

export default ProductItem