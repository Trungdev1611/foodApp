import React, { useEffect, useState } from 'react'
import ProductItem from './productItem/productItem'
import { useSelector, useDispatch } from 'react-redux'
import { actiongetFoodcreator, actionBurger, actionBread, actionSanwichs, actionDrinks, actionPizza } from './../../../redux/action/actioncreator'
import { useLocation } from 'react-router-dom'
import Pagination from './../pagination/Pagination'

import './products.scss'
const Products = ({ pageselect, setPageselect, valueRadio }) => {
    //pagination
    const [countPage, setCountpage] = useState(0)
    const dispatch = useDispatch()
    //lay duong dan hien tai URL
    const location = useLocation()

    const selector = useSelector(state => state)




    console.log('pageSelect', pageselect)
    console.log('valueRadio', valueRadio)
    //check link to get API
    useEffect(() => {
        function checkUrlcallApi() {
            if (location.pathname.includes('/listfood/bestfood')) {
                console.log('useEffect')
                dispatch(actiongetFoodcreator({ limit: 16, offset: pageselect, price: valueRadio }))

            }
            if (location.pathname.includes('listfood/burgur')) {
                dispatch(actionBurger({ limit: 16, offset: pageselect }))
            }
            if (location.pathname.includes('listfood/bread')) {
                dispatch(actionBread({ limit: 16, offset: pageselect }))
            }
            if (location.pathname.includes('listfood/sandwiches')) {
                dispatch(actionSanwichs({ limit: 16, offset: pageselect }))
            }
            if (location.pathname.includes('listfood/drinks')) {
                dispatch(actionDrinks({ limit: 16, offset: pageselect }))
            }
            if (location.pathname.includes('listfood/pizza')) {
                dispatch(actionPizza({ limit: 16, offset: pageselect }))
            }
            setCountpage(Math.ceil(selector.countpage / 16))
        }
        checkUrlcallApi()




    }, [dispatch, location.pathname, selector.countpage, pageselect, valueRadio])



    if (selector.loading) {
        return <h1>Loading.....</h1>
    }
    return (

        <div >
            {console.log('render-Productlist')}
            {console.log("countPage", selector.countpage / 16)}
            <div className='products-list'>


                {selector.data.map((ele, index) => {
                    return <div className='product-list__item' key={index}>
                        <ProductItem element={ele} />
                    </div>

                })}

            </div>
            <Pagination pageselect={pageselect}
                setPageselect={setPageselect}
                countPage={countPage}

            />

        </div>

    )
}

export default Products