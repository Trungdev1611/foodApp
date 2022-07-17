import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './headerfood.scss'
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { useLocation } from 'react-router-dom'
const Headerfood = () => {
    const location = useLocation()
    return (
        <div className='headerfood'>
            <Navbar />
            <div className="headerfood-content">
                <div className="headerfood-content__heading">
                    {location.pathname.includes('checkout') ? 'Checkout' : 'Best Foods'}
                </div>
                <div className="path">
                    <div className='path-item'><span>Home</span><span><LinearScaleIcon className='icon' /></span></div>
                    <div className='path-item'><span>Shop</span><span><LinearScaleIcon className='icon' /></span></div>
                    <div className='path-item hightlight'><span> {location.pathname.includes('checkout') ? 'Checkout' : 'Best Foods'}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Headerfood