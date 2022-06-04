import React from 'react'
import burger from './../asset/img/burger.svg'
import bread from './../asset/img/bread.svg'
import sandwich from './../asset/img/sandwich.svg'
import drinks from './../asset/img/drinks.svg'
import pizza from './../asset/img/pizza.svg'
import './popularlist.scss'
const PopularList = () => {
  return (
    <div className='popular-list'>
      <h3 className='popular-heading'>Popular</h3>
      <div className="popular-list__item">
        <span><img src={burger} alt="burger" /></span>
        <span className='item-name'>Burgers</span>
      </div>
      <div className="popular-list__item">
        <span><img src={bread} alt="bread" /></span>
        <span className='item-name'>Bread</span>
      </div>
      <div className="popular-list__item">
        <span><img src={sandwich} alt="sandwich" /></span>
        <span className='item-name'>Sandwichs</span>
      </div>
      <div className="popular-list__item">
        <span><img src={drinks} alt="drinks" /></span>
        <span className='item-name'>Drinks</span>
      </div>
      <div className="popular-list__item">
        <span><img src={pizza} alt="pizza" /></span>
        <span className='item-name'>Pizza</span>
      </div>
    </div>

  )
}

export default PopularList