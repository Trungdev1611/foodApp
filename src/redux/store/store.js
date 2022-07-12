import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web

import foodlistReducer from './../SliceReducer/foodlistSlice'
import AuthSliceReducer from "../SliceReducer/AuthSlice";
import CartReducer from './../SliceReducer/CartUserSlice'

const rootReducer = combineReducers({
    foodlistReducer,
    AuthSliceReducer,
    CartReducer

})
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['AuthSliceReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})

export default store