import React, { useState } from 'react'
import './counter.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Counterbottom from './Counterbottom';
const Counter = () => {


    const [videoshow, setVideoshow] = useState(false)
    return (
        <section className='counter'>
            {videoshow ?
                <div>
                    <div className="modal-video" onClick={() => setVideoshow(false)}></div>
                    <iframe src="https://www.youtube.com/embed/PxhR2CuVq6Q" title='video'></iframe>
                </div>
                : null}

            <div className='counter-content'>
                <div className="counter-heart">
                    <h3>Sandwich</h3>
                    <h4>$45</h4>

                </div>

                <div className="counter-effect" >
                    <span className="top-left"></span>
                    <span className="bottom-left"></span>
                    <span className="top-right"></span>
                    <span className="bottom-right" onClick={() => setVideoshow(true)}>{!videoshow ? <ArrowRightIcon className='arrow-icon' /> :
                        null
                    }</span>
                </div>
            </div>
            <Counterbottom />
        </section>
    )
}

export default Counter