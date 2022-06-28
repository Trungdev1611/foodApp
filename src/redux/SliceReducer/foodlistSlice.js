import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import * as actions from "../action/actioncreator";
const initialState = {
    data: [],
    loading: false,
    countpage: 0,
    pageselect: 1,

    price_lte: undefined,
    price_gte: undefined,
    rate_like: undefined,
    showlistMenu: false,
    name_like: undefined,
    //sap xep gia theo thu tu tang hoac giam dan
    _sort: undefined,
    _order: undefined,
    changeView: false,

    //details food render
    detailsfood: null


}
const foodListSlice = createSlice({
    initialState,
    name: 'foodlist',
    reducers: {
        //List menu Nav
        togglelistMenuNav: (state, action) => {
            state.showlistMenu = !state.showlistMenu
            return state
        },

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
            if (action.payload.price_gte === null && action.payload.price_gte === null) {
                state.price_lte = undefined
                state.price_gte = undefined
            }
            else {
                state.price_lte = action.payload.price_lte
                state.price_gte = action.payload.price_gte
            }
            return state
        },

        //filer by rate star
        sortstar: (state, action) => {
            state.rate_like = action.payload
            return state
        },
        //filter by input Search
        searchbyInput: (state, action) => {
            state.name_like = action.payload
        },
        //sap xep gia tu thap den cao hoac nguoc lai
        arrangementbyPrice: (state, action) => {
            state._sort = action.payload.field
            state._order = action.payload.order
            return state
        },
        changeViewaction: (state, action) => {
            state.changeView = !state.changeView
            return state
        },

        // trang hien thi food chi tiet
        setFoodDetailRender: (state, action) => {
            console.log('detailsfooddetailsfooddetailsfooddetailsfooddetailsfooddetailsfood')
            state.detailsfood = action.payload
            return state
        }


    },
    extraReducers: (builder) => {  // keyworn addMatcher
        builder

            .addMatcher(
                //addMatcher cho phep khớp với các action đầu vào tự định nghĩa của riêng developper ==>return true thì thuc thi addMatcher
                //VD:    kiem tra (action) => action.type.endsWith('/rejected') thi thuc thi function
                //state ==tuy y

                // isAnyOf - returns true when at least one of the conditions are met
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
    sortPrice,
    sortstar,
    togglelistMenuNav,
    searchbyInput,
    arrangementbyPrice,
    changeViewaction,
    setFoodDetailRender

} = foodListSlice.actions
export default foodListSlice.reducer