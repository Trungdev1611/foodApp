import { configureStore } from "@reduxjs/toolkit";
import foodlistReducer from './../SliceReducer/foodlistSlice'
const store = configureStore({
    reducer: {
        foodlistReducer,

    }
})

export default store