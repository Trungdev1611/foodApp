import React from 'react'
import PropTypes from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { addCountItemCreator, deleteItemCreator } from './../../redux/action/actioncreator'
import { useDispatch } from 'react-redux';
// import { updatetotalPrice } from './../../redux/SliceReducer/CartUserSlice'
const CartUserItem = (props) => {
  CartUserItem.propTypes = {
    cartItem: PropTypes.object
  }
  const dispatch = useDispatch()

  function incrementCountItem() {
    console.log('Incrementdata')
    dispatch(addCountItemCreator({ idproduct: props.cartItem.id, count: 1 }))
  }
  function decrementCountItem() {
    console.log('decrement')
    if (parseInt(props.cartItem.quatityproduct) !== 1) { //neu so luong san pham con = 1 thi khong cho giam nua
      dispatch(addCountItemCreator({ idproduct: props.cartItem.id, count: -1 }))
    }
  }

  //function xoa item trong gio hang
  function deleteItemcart() {
    dispatch(deleteItemCreator(props.cartItem.id))
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

        <DeleteOutlineIcon className="deletecartitem"
          onClick={deleteItemcart}
        />


      </div>

    </div>
  )
}

export default CartUserItem