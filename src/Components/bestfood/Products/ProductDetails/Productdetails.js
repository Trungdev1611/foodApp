import React, { useState, useEffect } from 'react'
import Headerfood from '../../Header/Headerfood'
import Footer from '../../../footer/Footer'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Buttonorder from '../../../Header/buttonorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation } from 'react-router-dom';
import { baseUrl } from './../../../../api/api'
import './ProductDetails.scss'
import axios from 'axios'
const Productdetails = () => {

    const [detailsfood, setDetailsfood] = useState()
    const location = useLocation()
    let content = location.pathname.replace('/listfood/fooditem/', '')

    useEffect(() => {
        async function fetchProductbyId(content) {
            await axios.get(`${baseUrl}${content}`).then(data => setDetailsfood(data.data))
        }
        fetchProductbyId(content)
        return () => {

        }
    }, [content])


    return (
        <div>
            <Headerfood />

            {console.log('renderrrrrrrrrrrrrrrrrr', detailsfood)}
            {(detailsfood) &&
                <div className='product-details'>
                    <section className="product-details__info">
                        <div className='info-image'>
                            <img src={detailsfood.img} alt="Anh san pham" className='img-large' />
                            <div className='img-small'>
                                <img src={detailsfood.img} alt="" width={'90px'} height={'90px'} />
                                <img src={detailsfood.img} alt="" width={'90px'} height={'90px'} />
                            </div>
                        </div>
                        <div className="info-content">
                            <h2 className="info-content__heading">
                                {detailsfood.name}
                            </h2>
                            <div className="info-content__star">
                                <StarRateIcon className='vote' />
                                <StarRateIcon className='vote' />
                                <StarRateIcon className='vote' />
                                <StarRateIcon className='vote' />
                                <StarBorderIcon className='unvote' />
                                <span>3 customer reviews</span>
                            </div>
                            <div className="info-content__price">
                                $169.00
                            </div>
                            <div className="info-content-place">
                                <div className="place-about"><span className='title-place'>Category:</span> <span>Best Foods</span></div>
                                <div className="place-about"><span className='title-place'>Country:</span> <span>New York, NY</span></div>

                            </div>
                            <div className="info-content-desc">
                                Half Bo Ssäm Dinner for 4-6
                            </div>
                            <div className="info-content-options">
                                <div className="content-option__items">
                                    <input type="radio" />
                                    <p>Buy 2 get 15 percent off</p>
                                </div>
                                <div className="content-option__items">
                                    <input type="radio" />
                                    <p>Buy 2 get 15 percent off</p>
                                </div>
                                <div className="content-option__items">
                                    <input type="radio" />
                                    <p>Buy 2 get 15 percent off</p>
                                </div>
                            </div>
                            <div className="addcart">
                                <div className="addcart-minus">-</div>
                                <div className="addcart-moutitem">1</div>
                                <div className="addcart-plus">+</div>
                                <div className="addcart-button">
                                    <Buttonorder />
                                </div>
                                <div className="addcart-favorite">
                                    <FavoriteBorderIcon />
                                </div>

                            </div>
                            <div className="info-content__ship">
                                <div className="ship-icon">
                                    <span>iconxeoto</span>
                                    <p className='ship-content'>Free global shipping on all orders</p>
                                </div>
                                <div className="ship-icon">
                                    <span>iconlich</span>
                                    <p className='ship-content'>Free global shipping on all orders</p>
                                </div>
                                <div className="ship-icon">
                                    <span>icondathang</span>
                                    <p className='ship-content'>Free global shipping on all orders</p>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            }
            <Footer />
        </div>
    )
}

export default Productdetails