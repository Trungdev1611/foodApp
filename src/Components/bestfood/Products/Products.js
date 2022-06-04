import React, { useEffect } from 'react'
import ProductItem from './productItem/productItem'
import { useSelector, useDispatch } from 'react-redux'
import { actiongetFoodcreator } from './../../../redux/action/actioncreator'
import './products.scss'
const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actiongetFoodcreator())
    }, [dispatch])

    const selector = useSelector(state => state)
    console.log(selector)
    if (selector.loading) {
        return <h1>Loading.....</h1>
    }
    return (
        <div className='products-list'>

            {/* <ProductItem element={l/> */}
            {selector.data.map((ele, index) => {
                return <div className='product-list__item' key={index}>
                    <ProductItem element={ele} />
                </div>

            })}

        </div>
    )
}

export default Products