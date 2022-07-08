import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    username: null,
    isShowToast: false



}
const AuthSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        loginSuccess: (state, action) => {
            console.log(action)
            return action.payload
        },
        logout: (state, action) => {
            console.log('logout:::', action)
            return initialState
        },
        hideNotify: (state, action) => {
            state.isShowToast = false
        }


    }
})



export const {
    loginSuccess,
    logout,
    hideNotify

} = AuthSlice.actions
export default AuthSlice.reducer