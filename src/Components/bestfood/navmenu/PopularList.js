import React from 'react'
// import burger from './../asset/img/burger.svg'
// import bread from './../asset/img/bread.svg'
// import sandwich from './../asset/img/sandwich.svg'
// import drinks from './../asset/img/drinks.svg'
// import pizza from './../asset/img/pizza.svg'
import { menuListdata } from '../../../utils/staticDatamenu'
import './popularlist.scss'

import { NavLink } from 'react-router-dom'
const PopularList = (props) => {
  //function setpageselect to 1 when click another link
  function handleSelectPage() {
    props.data(1)
  }
  return (
    <div className='popular-list'>
      <h3 className='popular-heading'>Popular</h3>

      {menuListdata.map((ele, index) => {
        return <NavLink to={ele.linkto} className={({ isActive }) => (isActive ? 'active' : '')} key={ele.id}
          onClick={handleSelectPage}
        >
          <div className="popular-list__item" >
            <span><img src={ele.src} alt={ele.name} /></span>
            <span className='item-name'>{ele.name}</span>
          </div>
        </NavLink>
      })}

    </div>

  )
}

export default PopularList