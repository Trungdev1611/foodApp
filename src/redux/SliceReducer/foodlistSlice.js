import { createSlice } from "@reduxjs/toolkit";
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
        builder.addCase(actiongetFoodcreator.pending, (state, action) => {
            console.log('Loading...........')
            state.loading = true
            return state
        })
            .addCase(actiongetFoodcreator.fulfilled, (state, action) => {
                console.log('success')
                console.log(action.payload)
                return { data: action.payload, loading: false }
            })
            .addCase(actionBurger.pending, (state, action) => {
                console.log('pending burgur')
                state.loading = true
                return state
            })
            .addCase(actionBurger.fulfilled, (state, action) => {
                console.log('success burgur')
                return { data: action.payload, loading: false }
            })
            .addCase(actionBread.pending, (state, action) => {
                console.log('pending bread')
                state.loading = true
                return state
            })
            .addCase(actionBread.fulfilled, (state, action) => {
                console.log('success bread')
                return { data: action.payload, loading: false }
            })
            .addCase(actionSanwichs.pending, (state, action) => {
                console.log('pending sandwich')
                state.loading = true
                return state
            })
            .addCase(actionSanwichs.fulfilled, (state, action) => {
                console.log('success sandwich')
                return { data: action.payload, loading: false }
            })
            .addCase(actionDrinks.pending, (state, action) => {
                console.log('pending drinks')
                state.loading = true
                return state
            })
            .addCase(actionDrinks.fulfilled, (state, action) => {
                console.log('success drinks')
                return { data: action.payload, loading: false }
            })
            .addCase(actionPizza.pending, (state, action) => {
                console.log('pending pizza')
                state.loading = true
                return state
            })
            .addCase(actionPizza.fulfilled, (state, action) => {
                console.log('success pizza')
                return { data: action.payload, loading: false }
            })

    }

})

export const getTodoaction = foodListSlice.actions.getTodo
export default foodListSlice.reducer