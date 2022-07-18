import React, { useState, useEffect } from 'react'
import Headerfood from '../../Header/Headerfood'
import Footer from '../../../footer/Footer'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ButtonAddcart } from '../../../Header/buttonorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation } from 'react-router-dom';
import { baseUrl } from './../../../../api/api'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import './ProductDetails.scss'
import Modal from './../../../modal/Modal';
import axios from 'axios'
import FoodDesc from '../../description/FoodDesc';
import { useSelector, useDispatch } from 'react-redux';
import { postIteminCart } from '../../../../redux/action/actioncreator';
import Comments from '../../comments/Comments';

const Productdetails = () => {
    const [changeviewImg, setChangeViewimg] = useState(false)
    const [itembuy, setItembuy] = useState(1)
    const [detailsfood, setDetailsfood] = useState()
    const [showReview, setShowreview] = useState(false)
    const location = useLocation()
    const selector = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    let content = location.pathname.replace('/listfood/fooditem/', '')

    useEffect(() => {
        async function fetchProductbyId(content) {
            await axios.get(`${baseUrl}${content}`).then(data => setDetailsfood(data.data))
        }
        fetchProductbyId(content)
        return () => {

        }
    }, [content])

    async function handleUserbuyproduct() {
        dispatch(postIteminCart({ postData: detailsfood, quatity: itembuy }))
    }

    function decrementCountIte() {
        if (itembuy !== 1) {
            setItembuy(prev => prev - 1)
        }
    }
    function incrementCountItem() {
        console.log('Incrementdata')
        setItembuy(prev => prev + 1)
    }

    return (
        <div>
            <Headerfood />

            {(detailsfood) &&
                <div className='product-details'>
                    <section className="product-details__info">
                        <div className='info-image'>
                            <div className="img-large">
                                <img src={detailsfood.img} alt="Anh san pham"
                                    className={changeviewImg ? 'changeview' : null}
                                />
                            </div>

                            <div className='img-small'>
                                <span className={!changeviewImg ? null : 'last'} onClick={() => setChangeViewimg(false)}>
                                    <img src={detailsfood.img} alt=""
                                    />
                                </span>
                                <span className={changeviewImg ? null : 'last'} onClick={() => setChangeViewimg(true)}>
                                    <img src={detailsfood.img} alt=""
                                    />
                                </span>
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
                            <div className="info-content__place">
                                <div className="place-about"><span className='title-place'>Category:</span> <span>Best Foods</span></div>
                                <div className="place-about"><span className='title-place'>Country:</span> <span>New York, NY</span></div>
                            </div>
                            <div className="info-content-desc">
                                Half Bo Ssäm Dinner for 4-6
                            </div>
                            <div className="info-content-options">
                                <h2 className='option-heading'>Choose Your Options</h2>

                                <div className="content-option__items">
                                    <input type="radio" id='chooseoptions' name='chooseoption' />
                                    <label htmlFor='chooseoptions'>Buy 2 get 15 percent off</label>
                                </div>
                                <div className="content-option__items">
                                    <input type="radio" id='chooseoptions' name='chooseoption' />
                                    <label htmlFor='chooseoptions'>Buy 3 get 25 percent off</label>
                                </div>
                                <div className="content-option__items">
                                    <input type="radio" id='chooseoptions' name='chooseoption' />
                                    <label htmlFor='chooseoptions'>Buy 5 get 50 percent off</label>
                                </div>
                            </div>
                            <div className="addcart">
                                <div className="addcart-minus"
                                    onClick={decrementCountIte}
                                ><RemoveIcon /></div>
                                <div className="addcart-moutitem">{itembuy}</div>
                                <div className="addcart-plus"
                                    onClick={incrementCountItem}
                                ><AddIcon /></div>
                                <div className="addcart-button" onClick={handleUserbuyproduct}>

                                    <ButtonAddcart />
                                </div>
                                <div className="addcart-favorite">
                                    <FavoriteBorderIcon />
                                </div>

                            </div>
                            <div className="info-content__ship">
                                <div className="ship-icon">
                                    <span><LocalShippingOutlinedIcon className="icon" /></span>
                                    <p className='ship-content'>Free global shipping on all orders</p>
                                </div>
                                <div className="ship-icon">
                                    <span><EventAvailableOutlinedIcon className="icon" /></span>
                                    <p className='ship-content'>2 hours easy returns if you change your mind</p>
                                </div>
                                <div className="ship-icon">
                                    <span><TryOutlinedIcon className="icon" /></span>
                                    <p className='ship-content'>Order before noon for same day dispatch</p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="options">
                        <button type='button' className={!showReview ? 'btn-active' : ''} onClick={() => setShowreview(false)}>Description</button>
                        <button type='button' className={showReview ? 'btn-active' : ''} onClick={() => setShowreview(true)}>Review</button>
                    </div>
                    <div className="contentshow">
                        {showReview ? <Comments foodItem={detailsfood} /> : <FoodDesc />}
                    </div>

                </div>
            }
            <Footer />
            {selector.isModalLogin && <Modal />}
        </div>
    )
}

export default Productdetails