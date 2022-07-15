import { createSlice, current } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = {
    isModalLogin: false,
    cartData: [],
    isShowCart: false,
    totalPrice: 0



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
        // updatetotalPrice: (state, action) => {
        //     console.log('aaaaaaaaaaaaa', current(state).cartData)
        //     let totalPriceUpdate = state.cartData.reduce((prev, current) => {
        //         return prev + parseInt(current.quatityproduct) * parseInt(current.price)
        //     }, 0)
        //     state.totalPrice = totalPriceUpdate
        //     return state
        // }


    },
    extraReducers: (builder) => {
        builder.addCase(actions.cartDataActionCreator.pending, (state, action) => {
            console.log('Loading...........')
        })
            .addCase(actions.cartDataActionCreator.fulfilled, (state, action) => {
                console.log('action Fullfill Cart:::', action.payload)
                if (action.payload.data) {
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
            .addCase(actions.addCountItemCreator.fulfilled, (state, action) => {


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