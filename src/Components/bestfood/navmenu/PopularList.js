import React from 'react'
import burger from './../asset/img/burger.svg'
import bread from './../asset/img/bread.svg'
import sandwich from './../asset/img/sandwich.svg'
import drinks from './../asset/img/drinks.svg'
import pizza from './../asset/img/pizza.svg'
import './popularlist.scss'
import { NavLink } from 'react-router-dom'
const PopularList = () => {
  return (
    <div className='popular-list'>
      <h3 className='popular-heading'>Popular</h3>
      <NavLink to='/listfood/burgur' className={({ isActive }) => (isActive ? 'active' : '')}>
        <div className="popular-list__item">
          <span><img src={burger} alt="burger" /></span>
          <span className='item-name'>Burgers</span>
        </div>
      </NavLink >
      <NavLink to='/listfood/breads' className={({ isActive }) => (isActive ? 'active' : '')}>
        <div className="popular-list__item">
          <span><img src={bread} alt="bread" /></span>
          <span className='item-name'>Bread</span>
        </div>
      </NavLink>

      <NavLink to='/listfood/sandwiches' className={({ isActive }) => (isActive ? 'active' : '')}>
        <div className="popular-list__item">
          <span><img src={sandwich} alt="sandwich" /></span>
          <span className='item-name'>Sandwichs</span>
        </div>
      </NavLink>
      <NavLink to='/listfood/drinks' className={({ isActive }) => (isActive ? 'active' : '')}>
        <div className="popular-list__item">
          <span><img src={drinks} alt="drinks" /></span>
          <span className='item-name'>Drinks</span>
        </div>
      </NavLink>
      <NavLink to='/listfood/pizzas' className={({ isActive }) => (isActive ? 'active' : '')}>
        <div className="popular-list__item">
          <span><img src={pizza} alt="pizza" /></span>
          <span className='item-name'>Pizza</span>
        </div>
      </NavLink>

    </div>

  )
}

export default PopularList