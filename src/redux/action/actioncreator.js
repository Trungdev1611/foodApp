import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/api";








// cac ation get data from aPI theo endpoint
//pass multiparameter in createAsyncthunk thi ta chi co the pass object 
export const actiongetFoodcreator = createAsyncThunk('getfoodData', (obj) => getData('best-foods', obj))
export const actionBurger = createAsyncThunk('getburgur', (obj) => getData('bbqs', obj))
export const actionBread = createAsyncThunk('breads', (obj) => getData('breads', obj))
export const actionSanwichs = createAsyncThunk('sandwiches', (obj) => getData('sandwiches', obj))
export const actionDrinks = createAsyncThunk('drinks', (obj) => getData('drinks', obj))
export const actionPizza = createAsyncThunk('pizzas', (obj) => getData('pizzas', obj))

