import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = { data: [], loading: false, countpage: 0, pageSelect: 1 }
const foodListSlice = createSlice({
    initialState,
    name: 'foodlist',
    reducers: {
        resetPage: (state, action) => {
            console.log(action)
            return state
        }
    },
    extraReducers: (builder) => {  // keyworn addMatcher
        builder

            .addMatcher(
                isAnyOf(actions.actiongetFoodcreator.pending, actions.actionBurger.pending, actions.actionBread.pending, actions.actionSanwichs.pending, actions.actionPizza.pending, actions.actionDrinks.pending),
                (state, action) => {
                    console.log('Loading...........')
                    state.loading = true
                    return state
                })
            .addMatcher(
                isAnyOf(actions.actiongetFoodcreator.fulfilled, actions.actionBurger.fulfilled, actions.actionBread.fulfilled, actions.actionSanwichs.fulfilled, actions.actionPizza.fulfilled, actions.actionDrinks.fulfilled),
                (state, action) => {
                    console.log('success')
                    console.log(action)
                    return { data: action.payload.data, loading: false, countpage: action.payload.countPage }
                }
            )




    }

})

export const getTodoaction = foodListSlice.actions.getTodo
export default foodListSlice.reducer