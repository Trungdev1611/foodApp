import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/api";








// cac ation get data from aPI theo endpoint

export const actiongetFoodcreator = createAsyncThunk('getfoodData', () => getData('best-foods', 16))
export const actionBurger = createAsyncThunk('getburgur', () => getData('bbqs', 16))
export const actionBread = createAsyncThunk('breads', () => getData('breads', 16))
export const actionSanwichs = createAsyncThunk('sandwiches', () => getData('sandwiches', 16))
export const actionDrinks = createAsyncThunk('drinks', () => getData('drinks', 16))
export const actionPizza = createAsyncThunk('pizzas', () => getData('pizzas', 16))

