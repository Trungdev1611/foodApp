import React from 'react'
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addCountItemCreator } from './../../redux/action/actioncreator'
import { useDispatch } from 'react-redux';
// import { updatetotalPrice } from './../../redux/SliceReducer/CartUserSlice'
const CartUserItem = (props) => {
  CartUserItem.propTypes = {
    cartItem: PropTypes.object
  }
  const dispatch = useDispatch()
  // console.log(props.cartItem)
  function incrementCountItem() {
    console.log('Incrementdata')
    dispatch(addCountItemCreator({ idproduct: props.cartItem.id, count: 1 }))
    // dispatch(updatetotalPrice())
  }
  function decrementCountItem() {
    console.log('decrement')
    if (parseInt(props.cartItem.quatityproduct) !== 1) {
      dispatch(addCountItemCreator({ idproduct: props.cartItem.id, count: -1 }))
      // dispatch(updatetotalPrice())




    }
  }
  return (
    <div className='cart-item'>
      <div className="cart-item__img">
        <img src={props.cartItem.img} alt="anh" />
      </div>
      <div className="cart-item__content">
        <div className="cart-content__heading">{props.cartItem.name}</div>
        <div className="cart-content__price">${props.cartItem.price}</div>
        <div className="cart-content-count">
          <div
            onClick={decrementCountItem}
          ><RemoveIcon className="addcart-minus" /></div>
          <div className="countItem">{props.cartItem.quatityproduct}</div>
          <div className="addcart-plus"
            onClick={incrementCountItem}
          ><AddIcon /></div>
        </div>

      </div>

    </div>
  )
}

export default CartUserItem