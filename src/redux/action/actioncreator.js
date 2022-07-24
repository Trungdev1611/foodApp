import { showToast, typeCartSuccess } from "../../utils/staticData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/api";
import { forcedLogin, updateCart } from "../SliceReducer/CartUserSlice";
import { instance } from "../../api/api";

// cac ation get data from aPI theo endpoint
//pass multiparameter in createAsyncthunk thi ta chi co the pass object 
export const actiongetFoodcreator = createAsyncThunk('getfoodData', (obj) => getData('best-foods', obj))
export const actionBurger = createAsyncThunk('getburgur', (obj) => getData('bbqs', obj))
export const actionBread = createAsyncThunk('breads', (obj) => getData('breads', obj))
export const actionSanwichs = createAsyncThunk('sandwiches', (obj) => getData('sandwiches', obj))
export const actionDrinks = createAsyncThunk('drinks', (obj) => getData('drinks', obj))
export const actionPizza = createAsyncThunk('pizzas', (obj) => getData('pizzas', obj))

// asyncthunk lay du lieu cart user tu server ve khi load
export const cartDataActionCreator = createAsyncThunk('getCartInDB', async function (_, thunkAPI) {

    try {
        let datacart = await instance.get('/cart/infocart')
        // console.log('dataCart:::::', datacart)
        return datacart.data
    } catch (error) {
        if (error.response.status === 422) { //422 la gio hang empty
            return { data: [] }
        }
        if (error.response.status === 401) {//401 la unthorization
            thunkAPI.dispatch(forcedLogin())
        }
        else {
            thunkAPI.dispatch(forcedLogin())
        }

    }
}


)

export const postIteminCart = createAsyncThunk('postItemincart', async ({ postData, quatity }, thunkAPI) => {
    let { id, ...rest } = postData//loai id ra khoi product
    let dataPost = { ...rest, idproduct: postData.id, quatityproduct: quatity } //thay key idproduct bang key id
    // console.log(dataPost)
    try {
        let response = await instance.post("http://localhost:3001/cart/producttocart", dataPost,
        )
        thunkAPI.dispatch(updateCart(response.data.data))
        showToast(typeCartSuccess)
    }
    catch (error) {
        thunkAPI.dispatch(forcedLogin())
    }
}
)

export const addCountItemCreator = createAsyncThunk('addIteminCart', async ({ idproduct, count },) => {
    try {
        let datacart = await instance.post('/cart/increment-item-incart', { idproduct: idproduct, count: count }
        )
        console.log('Addcountitem:::::', datacart)
        return datacart.data.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteItemCreator = createAsyncThunk('deleteItemCart', async (id) => {
    try {
        let dataDelete = await instance.delete(`http://localhost:3001/cart/deletecart/${id}`)
        return dataDelete.data.data
    }
    catch (error) {
        console.log('deleteCart', error)
    }
}
)

export const checkoutCreator = createAsyncThunk("checkout", async () => {
    try {
        await instance.delete('/cart/removecart')
        return 'success checkout'
    } catch (error) {
        console.log(error)
        console.log('khong con token trong header')
    }

})