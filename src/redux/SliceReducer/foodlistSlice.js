import { createSlice } from "@reduxjs/toolkit";
import { actiongetFoodcreator } from "../action/actioncreator";
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
    extraReducers: (builder) => {
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
    }

})

export const getTodoaction = foodListSlice.actions.getTodo
export default foodListSlice.reducer