import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './scrolltop.scss'
const ScrollTop = () => {
    const [visible, setVisible] = useState(true)



    function checkscrolldistance() {
        const scrolled = window.pageYOffset;
        console.log(scrolled)
        if (scrolled > 500) {
            setVisible(true)
        }
        else if (scrolled <= 500) {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', checkscrolldistance)
        return () => {
            window.removeEventListener('scroll', checkscrolldistance)
        }
    }

    )


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };
    return (
        <div>
            <ExpandLessIcon onClick={scrollToTop}
                className={visible ? 'show-scrolltop' : 'hide-scrolltop'} />

        </div>
    )
}

export default ScrollTop