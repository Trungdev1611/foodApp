import { createSlice, current } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = {
    isModalLogin: false,
    cartData: [],
    isShowCart: false,
    totalPrice: 0,
    loading: false



}
const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        forcedLogin: (state, action) => {
            state.isModalLogin = !state.isModalLogin
            console.log(action.type)

            return state
        },
        updateCart: (state, action) => {

            state.cartData = [...state.cartData, action.payload]

            console.log(state.cartData)
            return state
        },
        hideCart: (state, action) => {
            state.isShowCart = !state.isShowCart
            return state
        },

    },
    extraReducers: (builder) => {
        builder.addCase(actions.cartDataActionCreator.pending, (state, action) => {
            console.log('Loading...........')
        })
            .addCase(actions.cartDataActionCreator.fulfilled, (state, action) => {
                console.log('action Fullfill Cart:::', action.payload)
                if (action.payload && action.payload.data) {
                    state.cartData = action.payload.data
                    state.totalPrice = action.payload.totalPrice
                    state.isShowCart = true
                }

                return state
            })
            .addCase(actions.cartDataActionCreator.rejected, (state, action) => {
                // state.isShowCart = true

                console.log('loi reject cart')
                return state
            }
            )
            //addCase update count Item and update price
            .addCase(actions.addCountItemCreator.fulfilled, (state, action) => {
                console.log('action.payload:::::', action.payload)
                const findIndex = state.cartData.findIndex((ele, index) => {
                    return ele.id === action.payload.id
                })
                state.cartData[findIndex] = action.payload
                console.log(current(state))
                //cap nhat lai Price
                let totalPriceUpdate = state.cartData.reduce((prev, current) => {
                    return prev + parseInt(current.quatityproduct) * parseInt(current.price)
                }, 0)
                state.totalPrice = totalPriceUpdate
                return state

            })
            //addCase delete Item in cart and update price

            .addCase(actions.deleteItemCreator.fulfilled, (state, action) => {
                console.log('action.payload.id:::', action.payload.id)
                const newCartData = state.cartData.filter((ele, index) => {
                    return ele.id !== action.payload.id
                })
                state.cartData = newCartData
                //cap nhat lai Price
                let totalPriceUpdate = state.cartData.reduce((prev, current) => {
                    return prev + parseInt(current.quatityproduct) * parseInt(current.price)
                }, 0)
                state.totalPrice = totalPriceUpdate
                return state
            })
            .addCase(actions.checkoutCreator.pending, (state, action) => {
                console.log('pending.....')
                state.loading = true
                console.log(current(state))

                return state
            })
            .addCase(actions.checkoutCreator.fulfilled, (state, action) => {

                state.loading = false
            })
    }
}

)

export const {
    forcedLogin,
    updateCart,
    hideCart,
    // updatetotalPrice


} = CartSlice.actions
export default CartSlice.reducer