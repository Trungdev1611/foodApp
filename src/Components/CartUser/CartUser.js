import React from 'react'
import './Cartuser.scss'
import CartUserItem from './CartUserItem'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useSelector, useDispatch } from 'react-redux';
import { hideCart } from '../../redux/SliceReducer/CartUserSlice';
import StoreIcon from '@mui/icons-material/Store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CartEmpty from './../../assets/image/empty-cart.svg'
const CartUser = () => {
    const selector = useSelector(state => state.CartReducer)
    console.log('selector:::', selector)
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
                {(selector.cartData && selector.cartData.length === 0) &&
                    <div className="listproducts-cart">
                        <img src={CartEmpty} alt="Empty cart" className='empty-cart' />
                        <h4>Your Cart is Empty 🍔</h4>
                    </div>
                }
                <div className="cart-orderinfo">
                    <h4>Order Info</h4>
                    {/* <div className='info-priceship'>
                        <span className='light'>Shipping Cost</span>
                        <span>Free</span>
                    </div>
                    <div className='info-voucher'>
                        <span className='light'>Voucher</span>
                        <span>None</span>
                    </div> */}

                    <div className="payment">
                        <h4 className="payment-name">Total</h4>
                        <span className="payment-price">${selector.totalPrice}</span>
                    </div>
                    <div className="cart-orderinfo__options">
                        <span className="checkout">
                            <LocalGroceryStoreIcon className='cart-icon' />CHECK OUT
                        </span>
                        <span className="buymore">
                            <StoreIcon className='cart-icon' />BUY MORE
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartUser