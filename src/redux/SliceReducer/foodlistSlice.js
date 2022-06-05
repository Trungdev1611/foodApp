import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { actiongetFoodcreator, actionBurger, actionBread, actionSanwichs, actionPizza, actionDrinks } from "../action/actioncreator";
const initialState = { data: [], loading: false }
const foodListSlice = createSlice({
    initialState,
    name: 'foodlist',
    reducers: {
        getTodo: (state, action) => {
            console.log(action)
            return state
        }
    },
    extraReducers: (builder) => {  // keyworn addMatcher
        builder
            .addCase(actionPizza.fulfilled, (state, action) => {
                console.log('success pizza')
                return { data: action.payload, loading: false }
            })
            .addMatcher(
                isAnyOf(actiongetFoodcreator.pending, actionBurger.pending, actionBread.pending, actionSanwichs.pending, actionPizza.pending, actionDrinks.pending),
                (state, action) => {
                    console.log('Loading...........')
                    state.loading = true
                    return state
                })
            .addMatcher(
                isAnyOf(actiongetFoodcreator.fulfilled, actionBurger.fulfilled, actionBread.fulfilled, actionSanwichs.fulfilled, actionPizza.fulfilled, actionDrinks.fulfilled),
                (state, action) => {
                    console.log('success')
                    return { data: action.payload, loading: false }
                }
            )




    }

})

export const getTodoaction = foodListSlice.actions.getTodo
export default foodListSlice.reducer