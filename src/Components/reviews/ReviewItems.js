import React from 'react'
import PropTypes from "prop-types";
const ReviewItems = (props) => {
    ReviewItems.propTypes = {
        element: PropTypes.object
    }
    return (
        <div className='review-item'>
            <div className="item-wrapper__top">
                <div className="item-top__img">
                    <img src={props.element.src} alt="loi hien thi anh" />
                </div>
            </div>

            <div className="review-wrapper__bottom">
                <h2 className='reviews-bottom__name'>{props.element.name}</h2>
                <p className='reviews-bottom__jobs'>{props.element.jobs}</p>
                <p className='reviews-bottom__comment'>{props.element.desc}</p>
            </div>
        </div>
    )
}

export default ReviewItems