import React from 'react'
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartUserItem = (props) => {
  CartUserItem.propTypes = {
    cartItem: PropTypes.object
  }
  console.log(props.cartItem)
  return (
    <div className='cart-item'>
      <div className="cart-item__img">
        <img src={props.cartItem.img} alt="anh" />
      </div>
      <div className="cart-item__content">
        <div className="cart-content__heading">{props.cartItem.name}</div>
        <div className="cart-content__price">${props.cartItem.price}</div>
        <div className="cart-content-count">
          <div ><RemoveIcon className="addcart-minus" /></div>
          <div className="countItem">{props.cartItem.quatityproduct}</div>
          <div className="addcart-plus"><AddIcon /></div>
        </div>

      </div>

    </div>
  )
}

export default CartUserItem