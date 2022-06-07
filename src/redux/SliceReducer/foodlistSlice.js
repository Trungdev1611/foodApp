import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = {
    data: [],
    loading: false,
    countpage: 0,
    pageselect: 1,

    price_lte: undefined,
    price_gte: undefined,
    _limit: 16,



}
const foodListSlice = createSlice({
    initialState,
    name: 'foodlist',
    reducers: {
        //pagination
        actionincreasePage: (state, action) => {
            state.pageselect = state.pageselect + 1
            return state
        },
        actionsetpageselect: (state, action) => {
            state.pageselect = action.payload
            return state
        },
        actiondecreasePage: (state, action) => {
            state.pageselect = state.pageselect - 1
            return state
        },
        //filter by price
        sortPrice: (state, action) => {
            state.price_lte = action.payload.price_lte
            state.price_gte = action.payload.price_gte
            return state
        },


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
                    // console.log(action)
                    return { ...state, data: action.payload.data, loading: false, countpage: action.payload.countPage }
                }
            )




    }

})

export const {
    actionincreasePage,
    actionsetpageselect,
    actiondecreasePage,
    sortPrice

} = foodListSlice.actions
export default foodListSlice.reducer