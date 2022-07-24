import React, { useState } from 'react'
// import Counter from './Counter'
import './counterbottom.scss'
// import { useCountUp } from "react-countup";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counterbottom = () => {
    const [counterinView, setCounterinView] = useState(false)
    function onVisibilityChange(isVisible) {
        if (isVisible) {
            setCounterinView(true);
        }
    }
    return (

        <div className='counter-bottom'>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">
                    <CountUp end={counterinView ? 585 : 0} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">

                    <CountUp end={counterinView ? 6526 : 0} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+

                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">

                    <CountUp end={counterinView ? 90 : 0} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
            <div className='counter-bottom__item'>
                <h3 className="counter-bottom__number">

                    <CountUp end={counterinView ? 35 : 0} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+
                </h3>
                <p className='counter-bottom__desc'>Cups of Coffee</p>
            </div>
        </div>
    )
}

export default Counterbottom