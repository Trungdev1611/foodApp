import React from 'react'
import './introcontent.scss'
const Introcontent = (props) => {
    return (

        <div className='introcontent-item'>
            <h3>{props.element.heading}</h3>
            <p>{props.element.desc}</p>
            <span>{`0${props.element.id}`}</span>
        </div>
    )
}

export default Introcontent