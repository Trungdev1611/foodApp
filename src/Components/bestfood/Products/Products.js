import React, { useEffect } from 'react'
import ProductItem from './productItem/productItem'
import { useSelector, useDispatch } from 'react-redux'
import { actiongetFoodcreator, actionBurger, actionBread, actionSanwichs, actionDrinks, actionPizza } from './../../../redux/action/actioncreator'
import { useLocation } from 'react-router-dom'
import './products.scss'
const Products = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        if (location.pathname.includes('/listfood/bestfood')) {
            dispatch(actiongetFoodcreator())

        }
        if (location.pathname.includes('listfood/burgur')) {
            dispatch(actionBurger())
        }
        if (location.pathname.includes('listfood/bread')) {
            dispatch(actionBread())
        }
        if (location.pathname.includes('listfood/sandwiches')) {
            dispatch(actionSanwichs())
        }
        if (location.pathname.includes('listfood/drinks')) {
            dispatch(actionDrinks())
        }
        if (location.pathname.includes('listfood/pizza')) {
            dispatch(actionPizza())
        }

    }, [dispatch, location.pathname])




    const selector = useSelector(state => state)
    console.log(selector)
    if (selector.loading) {
        return <h1>Loading.....</h1>
    }
    return (
        <div className='products-list'>


            {selector.data.map((ele, index) => {
                return <div className='product-list__item' key={index}>
                    <ProductItem element={ele} />
                </div>

            })}

        </div>
    )
}

export default Products