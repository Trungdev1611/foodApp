import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './headerfood.scss'
import LinearScaleIcon from '@mui/icons-material/LinearScale';
const Headerfood = () => {
    return (
        <div className='headerfood'>
            <Navbar />
            <div className="headerfood-content">
                <div className="headerfood-content__heading">
                    Best Foods
                </div>
                <div className="path">
                    <div className='path-item'><span>Home</span><span><LinearScaleIcon className='icon' /></span></div>
                    <div className='path-item'><span>Shop</span><span><LinearScaleIcon className='icon' /></span></div>
                    <div className='path-item hightlight'><span>Best Foods</span></div>
                </div>
            </div>
        </div>
    )
}

export default Headerfood