import React from 'react'
import Headerfood from '../../Header/Headerfood'
import Footer from '../../../footer/Footer'
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
const Productdetails = () => {
    // let param = useParams()
    // console.log(param)
    const { detailsfood } = useSelector(state => state)
    console.log('ddddddddddddddddddddddddddddddddd', detailsfood)


    return (
        <div>
            <Headerfood />

            {console.log('renderrrrrrrrrrrrrrrrrr', detailsfood)}
            {(detailsfood) ? <h1>ProductDetails</h1> : ''}
            <Footer />
        </div>
    )
}

export default Productdetails