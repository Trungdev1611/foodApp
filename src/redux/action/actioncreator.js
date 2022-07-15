import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../../api/api";
import { forcedLogin } from "../SliceReducer/CartUserSlice";
import Cookies from 'universal-cookie'
const cookies = new Cookies();
const token = cookies.get('accessToken')



// cac ation get data from aPI theo endpoint
//pass multiparameter in createAsyncthunk thi ta chi co the pass object 
export const actiongetFoodcreator = createAsyncThunk('getfoodData', (obj) => getData('best-foods', obj))
export const actionBurger = createAsyncThunk('getburgur', (obj) => getData('bbqs', obj))
export const actionBread = createAsyncThunk('breads', (obj) => getData('breads', obj))
export const actionSanwichs = createAsyncThunk('sandwiches', (obj) => getData('sandwiches', obj))
export const actionDrinks = createAsyncThunk('drinks', (obj) => getData('drinks', obj))
export const actionPizza = createAsyncThunk('pizzas', (obj) => getData('pizzas', obj))


export const cartDataActionCreator = createAsyncThunk('getCartInDB', async function (_, thunkAPI) {
    const token = cookies.get('accessToken')
    console.log('token in actioncreator', token)

    if (token) {
        let headers = {
            "Content-Type": "application/json",
            'Authorization': token

        }

        try {
            let datacart = await axios.get('http://localhost:3001/cart/infocart', { headers: headers })
            console.log('dataCart:::::', datacart)
            return datacart.data
        } catch (error) {
            if (error.response.status === 422) {
                console.log('aaaaaaaaaaaaa')
                return { data: [] }
            }
            if (error.response.status === 401) {
                thunkAPI.dispatch(forcedLogin())
            }
            console.log(error)
            console.log('khong con token trong header')
        }
    }
    else {
        console.log('elsessssss')
        thunkAPI.dispatch(forcedLogin())
        return []
    }

})



export const addCountItemCreator = createAsyncThunk('addIteminCart', async ({ idproduct, count },) => {
    if (token) {
        let headers = {
            "Content-Type": "application/json",
            'Authorization': token

        }

        try {
            let datacart = await axios.post('http://localhost:3001/cart/increment-item-incart', { idproduct: idproduct, count: count }, { headers: headers })
            console.log('Addcountitem:::::', datacart)
            return datacart.data.data
        } catch (error) {
            console.log(error)
            console.log('khong con token trong header')
        }
    }
})

export const deleteItemCreator = createAsyncThunk('deleteItemCart', async (id) => {
    if (token) {
        let headers = {
            "Content-Type": "application/json",
            'Authorization': token

        }
        try {
            let dataDelete = await axios.delete(`http://localhost:3001/cart/deletecart/${id}`, { headers })
            return dataDelete.data.data
        }
        catch (error) {
            console.log('deleteCart', error)
        }
    }
})