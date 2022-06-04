import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Buttonorder from './buttonorder'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.scss'

import Slider from "react-slick";
const Header = () => {
  const [showlistMenu, setShowlistMenu] = useState(false)

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'dots-slide'
  };

  return (
    <div style={{ overflow: 'hidden' }}>


      <Navbar showlistMenu={showlistMenu} setShowlistMenu={setShowlistMenu} />

      <Slider {...settings}  >

        <header className='header bgImage'>
          <div className="header-content">
            <p className='title'>ENJOY YOUR MEAL</p>
            <div className="headeing-banner">
              Good food is wise <span>medicine</span>
            </div>
            <Buttonorder />
          </div>

        </header>
        <header className='header bgImage1' >
          <div className="header-content">
            <p className='title'>HAPPY YOUR SPECIAL</p>
            <div className="headeing-banner">
              Love at first <span>bite</span>
            </div>
            <Buttonorder />
          </div>

        </header>
        <header className='header bgImage2' >
          <div className="header-content">
            <p className='title'>GOOD FOOD IS GOOD MOOD</p>
            <div className="headeing-banner">
              The belly rules the <span>mind</span>
            </div>
            <Buttonorder />
          </div>

        </header>
      </Slider>
      {showlistMenu ? <div className={'modal'} onClick={() => setShowlistMenu(false)}  ></div> : ''}




    </div >

  )
}

export default Header