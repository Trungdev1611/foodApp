import React from 'react'
import Bestfood from './bestfood/Bestfood';
import Category from './category/category';
import Counter from './counter/Counter';
import Delivery from './delivery/Delivery';
import Footer from './../footer/Footer';
import Header from './../Header/Header';
import Intro from './Intro/Intro';
import Order from './Order/Order';
import Products from './products/Products';
import { Review } from './reviews/Review';
const Home = () => {
    return (
        <div>
            <Header />
            <Order />
            <Intro />
            <Bestfood />
            <Category />
            <Delivery />
            <Products />
            <Counter />
            <Review />
            <Footer />
        </div>
    )
}

export default Home