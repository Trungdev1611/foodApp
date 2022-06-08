import React, { useEffect } from 'react'
import ProductItem from './productItem/productItem'
import { useSelector, useDispatch } from 'react-redux'
import { actiongetFoodcreator, actionBurger, actionBread, actionSanwichs, actionDrinks, actionPizza } from './../../../redux/action/actioncreator'
import { useLocation } from 'react-router-dom'
import Pagination from './../pagination/Pagination'

import './products.scss'
const Products = () => {
    //pagination
    const dispatch = useDispatch()
    //lay duong dan hien tai URL
    const location = useLocation()

    const selector = useSelector(state => state)
    const { pageselect, price_lte, price_gte, rate_like } = selector

    console.log(selector)

    // console.log('valueRadio', valueRadio)
    //check link to get API

    useEffect(() => {
        function checkUrlcallApi() {

            if (location.pathname.includes('/listfood/bestfood')) {
                // console.log('useEffect')
                dispatch(actiongetFoodcreator(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }
                ))

            }
            if (location.pathname.includes('listfood/burgur')) {
                dispatch(actionBurger(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }))
            }
            if (location.pathname.includes('listfood/bread')) {
                dispatch(actionBread(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }))
            }
            if (location.pathname.includes('listfood/sandwiches')) {
                dispatch(actionSanwichs(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }))
            }
            if (location.pathname.includes('listfood/drinks')) {
                dispatch(actionDrinks(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }))
            }
            if (location.pathname.includes('listfood/pizza')) {
                dispatch(actionPizza(
                    { _limit: 16, _page: pageselect, price_gte: price_gte, price_lte: price_lte, rate_like: rate_like }))
            }

        }
        checkUrlcallApi()




    }, [dispatch, location.pathname, selector.countpage, pageselect, price_gte, price_lte, rate_like
    ])



    if (selector.loading) {
        return <h1>Loading.....</h1>
    }
    if (selector.data.length === 0) {
        return <h1>No food is relevant to this case..</h1>
    }
    return (

        <div >
            <div className='products-list'>


                {selector.data.map((ele, index) => {
                    return <div className='product-list__item' key={index}>
                        <ProductItem element={ele} />
                    </div>

                })}

            </div>
            <Pagination

            />

        </div>

    )
}

export default Products