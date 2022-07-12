import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../../api/api";
import Cookies from 'universal-cookie'
const cookies = new Cookies();
// export const foodDetailRenderringAction = (payload) => {
//     return {
//         type: 'FOOD_DETAIL',
//         payload
//     }
// }






// cac ation get data from aPI theo endpoint
//pass multiparameter in createAsyncthunk thi ta chi co the pass object 
export const actiongetFoodcreator = createAsyncThunk('getfoodData', (obj) => getData('best-foods', obj))
export const actionBurger = createAsyncThunk('getburgur', (obj) => getData('bbqs', obj))
export const actionBread = createAsyncThunk('breads', (obj) => getData('breads', obj))
export const actionSanwichs = createAsyncThunk('sandwiches', (obj) => getData('sandwiches', obj))
export const actionDrinks = createAsyncThunk('drinks', (obj) => getData('drinks', obj))
export const actionPizza = createAsyncThunk('pizzas', (obj) => getData('pizzas', obj))


export const cartDataActionCreator = createAsyncThunk('getCartInDB', async function () {
    const token = cookies.get('accessToken')
    let headers = {
        "Content-Type": "application/json",
        'Authorization': token

    }

    try {
        let datacart = await axios.get('http://localhost:3001/cart/infocart', { headers: headers })
        console.log('dataCart:::::', datacart)
        return datacart.data
    } catch (error) {
        console.log(error)
    }
})

