import React from 'react'
import './Intro.scss'
import Introcontent from './../introcontent/Introcontent'
import { introcontentData } from '../../utils/staticData'
const Intro = () => {
    return (
        <section className='intro'>
            {introcontentData.map((ele, index) => {
                return <Introcontent element={ele} key={index} />
            })}
        </section>
    )
}

export default Intro