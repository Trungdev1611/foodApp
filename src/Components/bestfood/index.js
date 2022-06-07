import React from 'react'
import Headerfood from './Header/Headerfood'
import PopularList from './navmenu/PopularList'
import Price from './price/price'
import './index.scss'
import Starlist from './Star/Starlist'
import Products from './Products/Products'
import Search from './search/Search'
import DropdownFilter from './DropdownFilter/DropdownFilter'
import Sort from './sort/Sort'
import Footer from './../footer/Footer'

const ProductList = () => {

    return (
        <div >
            <Headerfood />
            <div className="bestfood-body">
                <div className='nav-menu-list'>
                    <PopularList />
                    <Price />
                    <Starlist />
                </div>

                <div className='food-wrapper'>
                    <div className="food-header">
                        <Search />
                        <DropdownFilter />
                        <Sort />
                    </div>
                    <div className="food-list">
                        <Products />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList