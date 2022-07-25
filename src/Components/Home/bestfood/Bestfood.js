import React, { useRef, useEffect } from 'react'
import Buttonorder from './../../Header/buttonorder'
import './bestfood.scss'
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Bestfood = () => {
    const el = useRef()
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.from(q(".bestfood-title"), { x: 30, duration: 3, scrollTrigger: { trigger: q(".bestfood-title"), start: "-150 bottom" } });
        gsap.from(q(".bestfood-heading"), { x: -30, duration: 3, delay: 1, scrollTrigger: { trigger: q(".bestfood-heading"), start: "-150 bottom" } });
    }, [q])
    return (
        <section className='bestfood' style={{ margin: '6rem 0' }} ref={el}>
            <h4 className='bestfood-title'>Best food</h4>
            <h2 className='bestfood-heading'>Super delicious Steak <span>Hamburger</span></h2>
            <span>$25.00</span>
            <div className="bestfood-btn">
                <Buttonorder />

            </div>
        </section>
    )
}

export default Bestfood