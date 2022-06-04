import React from 'react'
import './review.scss';
import Slider from "react-slick";
import ReviewItems from './ReviewItems';
import { reviewsData } from '../../../utils/staticData';
export const Review = () => {
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='reviews'>
            <Slider {...settings}  >
                {
                    reviewsData.map((ele, index) => {
                        return <ReviewItems element={ele} key={index} />


                    })
                }
            </Slider>
        </section>
    )
}
