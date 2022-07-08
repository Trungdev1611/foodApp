import { configureStore } from "@reduxjs/toolkit";
import foodlistReducer from './../SliceReducer/foodlistSlice'
import AuthSliceReducer from "../SliceReducer/AuthSlice";
const store = configureStore({
    reducer: {
        foodlistReducer,
        AuthSliceReducer

    }
})

export default store