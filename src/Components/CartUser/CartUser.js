import React from 'react'
import './Cartuser.scss'
import CartUserItem from './CartUserItem'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useSelector, useDispatch } from 'react-redux';
import { hideCart } from '../../redux/SliceReducer/CartUserSlice';
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CartEmpty from './../../assets/image/empty-cart.svg'
import { useNavigate } from 'react-router-dom'
import { checkoutCreator } from '../../redux/action/actioncreator';

const CartUser = () => {
    const selector = useSelector(state => state.CartReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handlehideCart(e) {

        if (e.target === e.currentTarget) {
            dispatch(hideCart())

        }
    }

    function handleCheckout(e) {
        if (selector.cartData.length > 0) {
            e.stopPropagation()
            dispatch(hideCart())

            dispatch(checkoutCreator())
            navigate('/checkout')

            // console.log(1111)
        }

    }

    return (
        <div className="modal" onClick={(e) => handlehideCart(e)}>
            <div className='cart-user'>
                <div className="cart-user__heading">
                    <h3>SHOPPING CART</h3>
                    <div onClick={() => dispatch(hideCart())}>
                        < CloseSharpIcon className="cart-close" sx={{ stroke: "#black", strokeWidth: 10 }} />
                    </div>

                </div>
                {(selector.cartData && selector.cartData.length > 0) &&
                    <div className="listproducts-cart">
                        {
                            selector.cartData.map((ele, index) => {
                                return <CartUserItem key={index} cartItem={ele} />
                            })
                        }
                    </div>}
                {(selector.cartData && selector.cartData.length === 0) &&
                    <div className="listproducts-cart">
                        <img src={CartEmpty} alt="Empty cart" className='empty-cart' />
                        <h4>Your Cart is Empty 🍔</h4>
                    </div>
                }
                <div className="cart-orderinfo">
                    <h4>Order Info</h4>

                    <div className="payment">
                        <h4 className="payment-name">Total</h4>
                        <span className="payment-price">${selector.totalPrice || 0}</span>
                    </div>
                    <div className="cart-orderinfo__options">
                        <span className="checkout-btn" onClick={(e) => handleCheckout(e)}>
                            <LocalGroceryStoreIcon className='cart-icon' />CHECK OUT
                        </span>
                        <span className="buymore" onClick={(e) => { e.stopPropagation(); navigate('/listfood'); dispatch(hideCart()) }}>
                            <StoreIcon className='cart-icon' />BUY MORE
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartUser