import React, { useRef, useEffect } from 'react'
import './Intro.scss'
import Introcontent from '../introcontent/Introcontent'
import { introcontentData } from '../../../utils/staticData'
import gsap from "gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Intro = () => {
    const el = useRef()
    const q = gsap.utils.selector(el);
    useEffect(() => {
        gsap.from(q(".introcontent-item"), { y: 40, duration: 1, stagger: 1, opacity: 0, scrollTrigger: { trigger: q(".introcontent-item"), start: "-100 bottom" } });
    }, [q])
    return (
        <section className='intro' ref={el}>
            {introcontentData.map((ele, index) => {
                return <Introcontent element={ele} key={index} />
            })}
        </section>
    )
}

export default Intro