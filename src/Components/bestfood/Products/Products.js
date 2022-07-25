import React, { useEffect } from 'react'
import ProductItem from './productItem/productItem'
import { useSelector, useDispatch } from 'react-redux'
import { actiongetFoodcreator, actionBurger, actionBread, actionSanwichs, actionDrinks, actionPizza } from './../../../redux/action/actioncreator'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from './../pagination/Pagination'
import queryString from 'query-string'

import './products.scss'

const Products = () => {
    //pagination
    const dispatch = useDispatch()
    //lay duong dan hien tai URL
    const location = useLocation()

    const selector = useSelector(state => state.foodlistReducer)
    const { pageselect, price_lte, price_gte, rate_like, name_like, _sort, _order, changeView } = selector
    console.log('rateLike', rate_like, pageselect, price_lte, price_gte, rate_like, name_like, _sort, _order, changeView)
    const navigate = useNavigate()


    useEffect(() => {
        function checkUrlcallApi() {

            if (location.pathname.includes('/listfood/bestfood')) {
                // console.log('useEffect')
                dispatch(actiongetFoodcreator(
                    {
                        _limit: 16, _page: pageselect, price_gte,
                        price_lte, rate_like,
                        name_like, _sort, _order
                    }
                ))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)

            }
            if (location.pathname.includes('listfood/bbqs')) {
                dispatch(actionBurger(
                    { _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order }))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)

            }
            if (location.pathname.includes('listfood/bread')) {
                dispatch(actionBread(
                    { _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order }))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)
            }
            if (location.pathname.includes('listfood/sandwiches')) {
                dispatch(actionSanwichs(
                    { _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order }))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)
            }
            if (location.pathname.includes('listfood/drinks')) {
                dispatch(actionDrinks(
                    { _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order }))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)
            }
            if (location.pathname.includes('listfood/pizza')) {
                dispatch(actionPizza(
                    { _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order }))
                //dieu huong url den api dang goi
                navigate(`?${queryString.stringify({ _limit: 16, _page: pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order })}`)
            }

        }
        checkUrlcallApi()




    }, [dispatch, location.pathname, selector.countpage,
        pageselect, price_gte, price_lte, rate_like, name_like, _sort, _order, navigate
    ])

    function detailsItem(ele) {
        //go to item detail page
        console.log(ele)
        console.log(location.pathname)
        let cutUrl = (location.pathname.replace('/listfood', ''))
        console.log(cutUrl)
        let cutUrl2 = cutUrl.replace('bestfood', 'best-foods')
        navigate(`/listfood/fooditem${cutUrl2}/${ele.id}`)
    }


    if (selector.loading) {
        return <div className='products-list'><h1>Loading.....</h1></div>
    }
    if (selector.data.length === 0) {
        return <h1>No food is relevant to this case..</h1>
    }
    return (

        <div >
            <div className='products-list'
                style={changeView ? { gridTemplateColumns: "repeat(1, 1fr)" } : null}
            >
                {selector.data.map((ele, index) => {
                    return <div className='product-list__item' key={index} onClick={() => detailsItem(ele)}>
                        <ProductItem element={ele}

                        />

                    </div>

                })}

            </div>


            <Pagination />

        </div>

    )
}

export default Products