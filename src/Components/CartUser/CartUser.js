import React from 'react'
import './Cartuser.scss'
import CartUserItem from './CartUserItem'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useSelector, useDispatch } from 'react-redux';
import { hideCart } from '../../redux/SliceReducer/CartUserSlice';
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const CartUser = () => {
    const selector = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    function handlehideCart(e) {
        console.log(e.target)
        console.log(e.currentTarget)
        if (e.target === e.currentTarget) {
            dispatch(hideCart())

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

                <div className="cart-orderinfo">
                    <h4>Order Info</h4>
                    <div className='info-priceship'>
                        <span className='light'>Shipping Cost</span>
                        <span>Free</span>
                    </div>
                    <div className='info-voucher'>
                        <span className='light'>Voucher</span>
                        <span>None</span>
                    </div>
                    <div className="payment">
                        <h4 className="payment-name">Total</h4>
                        <span className="payment-price">$500</span>
                    </div>
                    <div className="cart-orderinfo__options">
                        <span className="checkout">
                            <LocalGroceryStoreIcon />CHECKOUT
                        </span>
                        <span className="buymore">
                            <StoreIcon />BUY MORE
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartUser