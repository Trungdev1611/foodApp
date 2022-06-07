import React, { useState } from 'react'
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
    const [pageSelect, setpageSelect] = useState(1)
    const [valueRadio, setValueRadio] = useState("")

    return (
        <div >
            <Headerfood />
            <div className="bestfood-body">
                <div className='nav-menu-list'>
                    <PopularList data={() => setpageSelect(1)} />
                    <Price set1={setValueRadio} />
                    <Starlist />
                </div>

                <div className='food-wrapper'>
                    <div className="food-header">
                        <Search />
                        <DropdownFilter />
                        <Sort />
                    </div>
                    <div className="food-list">
                        <Products pageselect={pageSelect} setPageselect={setpageSelect} valueRadio={valueRadio} />
                        {console.log('index', pageSelect)}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList