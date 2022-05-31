import React, { useState } from 'react'
import './counter.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Counter = () => {
    const [videoshow, setVideoshow] = useState(false)
    return (
        <section className='counter' style={{}}>
            {videoshow ? <div className="video" onClick={() => setVideoshow(false)}></div> : null}

            <div className='counter-content'>
                <div className="counter-heart">
                    <h3>Sandwich</h3>
                    <h4>$45</h4>

                </div>

                <div className="counter-effect">
                    <span className="top-left"></span>
                    <span className="bottom-left"></span>
                    <span className="top-right"></span>
                    <span className="bottom-right" onClick={() => setVideoshow(true)}>{!videoshow ? <ArrowRightIcon className='arrow-icon' /> :
                        <iframe src="https://www.youtube.com/embed/PxhR2CuVq6Q" width={622} height={350} title='video'></iframe>
                    }</span>
                </div>
            </div>
        </section>
    )
}

export default Counter