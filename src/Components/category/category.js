import React from 'react'
import './category.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import { categoryData } from '../../utils/staticData'
// install modult chay autoplay
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
SwiperCore.use([Autoplay, Navigation]);

const Category = () => {
    return (
        <section className='category'>
            <h4 className="category-title">
                What we have?
            </h4>
            <h2 className="category-heading">
                Browse food category
            </h2>

            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                // speed={450}  
                breakpoints={{
                    400: {
                        // width: 400,
                        slidesPerView: 3,
                        spaceBetween: 40

                    },
                    767: {
                        // width: 767,
                        slidesPerView: 4,
                        spaceBetween: 40

                    },
                    960: {
                        // width: 960,
                        slidesPerView: 7,
                        spaceBetween: 50

                    }

                }



                }

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}

            >
                {categoryData.map((ele, index) => {
                    return <SwiperSlide key={index}>
                        <img src={ele.product} className='category-img' alt="loi category" />
                    </SwiperSlide>
                })}





                <div className="btn-wrapper__left">
                    <div className="swiper-button-prev">
                        <span style={{ transform: 'rotate(180deg)' }}><DoubleArrowIcon /></span>
                    </div>
                </div>
                <div className="btn-wrapper__right">
                    <div className="swiper-button-next">
                        <span><DoubleArrowIcon /></span>

                    </div>
                </div>



            </Swiper>


        </section>
    )
}

export default Category