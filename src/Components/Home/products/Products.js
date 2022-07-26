import React, { useRef, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import ProductItem from './product/ProductItem';
import { productsdata } from './../../../utils/staticData';
import './products.scss'
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Products = () => {
  const el = useRef()
  const q = gsap.utils.selector(el);
  useEffect(() => {
    gsap.from(q(".products-title"), { delay: 0.5, x: -50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".products-title"), start: "-100 bottom" } });
    gsap.from(q(".products-heading"), { delay: 0.5, x: 50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".products-heading"), start: "-100 bottom" } });
    gsap.from(q(".swiper"), { delay: 0.5, y: 50, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".swiper"), start: "-100 bottom" } });

  }, [q])
  return (
    <div className='products' ref={el}>
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
          1100: {
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