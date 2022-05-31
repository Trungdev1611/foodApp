import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import ProductItem from './product/ProductItem';
import { productsdata } from '../../utils/staticData';
import './products.scss'
const Products = () => {
  return (
    <div className='products'>
      <div className="products-title">
        Quality Products
      </div>
      <div className="products-heading">
        Burger as expected <span>dilicious</span> one
      </div>
      <Swiper
        spaceBetween={35}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        breakpoints={{
          420: {
            // width: 400,
            slidesPerView: 2,
            spaceBetween: 40

          },
          767: {
            // width: 767,
            slidesPerView: 3,
            spaceBetween: 40

          },
          1000: {
            // width: 960,
            slidesPerView: 4,
            spaceBetween: 50

          }

        }}
      >
        {
          productsdata.map((ele, index) => {
            return <SwiperSlide key={index}><ProductItem data={ele} /></SwiperSlide>
          })
        }

      </Swiper>
    </div >
  )
}

export default Products