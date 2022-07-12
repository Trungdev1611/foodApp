import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = {
    isModalLogin: false,
    cartData: [],
    isShowCart: false



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
        }


    },
    extraReducers: (builder) => {
        builder.addCase(actions.cartDataActionCreator.pending, (state, action) => {
            console.log('Loading...........')
        })
            .addCase(actions.cartDataActionCreator.fulfilled, (state, action) => {
                console.log('action Fullfill Cart:::', action.payload)
                state.cartData = action.payload.data
                state.isShowCart = true
                console.log("state::::", state.cartData)
                return state
            })
            .addCase(actions.cartDataActionCreator.rejected, (state, action) => {
                console.log('loi reject cart')
                return state
            }
            )
    }
}

)

export const {
    forcedLogin,
    updateCart,
    hideCart

} = CartSlice.actions
export default CartSlice.reducer