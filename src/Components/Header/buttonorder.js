import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useRef, useEffect } from 'react';
import './button.scss';
import gsap from "gsap/all";
import { Link } from 'react-router-dom';
const Buttonorder = () => {
    const btnRef = useRef()

    useEffect(() => {
        const heading1 = btnRef.current
        gsap.from(heading1, { y: 50, duration: 1, delay: 2, opacity: 0, scrollTrigger: { trigger: heading1, start: "-100 bottom" } })

    })
    return (
        <Link to='/listfood' >
            <button ref={btnRef}>
                <ShoppingCartIcon className='icon-material' />Order Now
            </button>
        </Link>

    )
}

export const ButtonAddcart = () => {
    return (

        <button style={{ marginTop: 0, textAlign: 'center' }}>
            <AddShoppingCartIcon className='icon-material' style={{ marginRight: '10px' }} />Order Now
        </button>


    )
}
export default Buttonorder