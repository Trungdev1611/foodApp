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
            return action.payload
        },
        logout: (state, action) => {
            return {
                isLogin: false,
                username: null,
                isShowToast: false
            }
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