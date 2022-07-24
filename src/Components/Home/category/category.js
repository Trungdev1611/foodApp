import React, { useRef, useEffect } from 'react'
import './category.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation"
import { categoryData } from '../../../utils/staticData'
// install modult chay autoplay
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

SwiperCore.use([Autoplay, Navigation]);

const Category = () => {
    const el = useRef()
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.from(q(".category-title"), { x: 50, duration: 1, opacity: 0, delay: 1, scrollTrigger: { trigger: q(".category-title"), start: "-100 bottom" } });
        gsap.from(q(".category-heading"), { x: -50, duration: 1, opacity: 0, delay: 1.5, scrollTrigger: { trigger: q(".category-heading"), start: "-100 bottom" } });
        gsap.from(q(".swiper"), { y: -50, duration: 1, opacity: 0, delay: 2, scrollTrigger: { trigger: q(".swiper"), start: "-100 bottom" } });
    }, [q])
    return (
        <section className='category' ref={el}>
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