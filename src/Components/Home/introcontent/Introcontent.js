import React from 'react'
import './introcontent.scss'

const Introcontent = (props) => {
    return (

        <div className='introcontent-item' >
            <h3 className='introcontent-heading'>{props.element.heading}</h3>
            <p className='introcontent-desc'>{props.element.desc}</p>
            <span className='introcontent-id'>{`0${props.element.id}`}</span>
        </div>
    )
}

export default Introcontent