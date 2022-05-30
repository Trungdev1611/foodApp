import React, { useEffect } from 'react'
import logonav from './../../assets/image/logo.59e734ae.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Signin from '../Singn/Signin';
import './Navbar.scss'

const Navbar = ({ setShowlistMenu, showlistMenu }) => {

    function fixedTopNavbar() {
        let distanceToTop = window.pageYOffset
        if (distanceToTop > 65) {
            console.log(distanceToTop)
            document.querySelector('.navbar').style.backgroundColor = "rgba(0,0,0,.8)"
            document.querySelector('.header').style.paddingTop = "0.7rem"

        }
        else {
            document.querySelector('.navbar').style.backgroundColor = "transparent"
            document.querySelector('.header').style.paddingTop = "1rem"



        }
    }
    useEffect(() => {
        window.addEventListener('scroll', fixedTopNavbar)

        return () => {
            window.removeEventListener('scroll', fixedTopNavbar)
        }
    })
    function handleShowMenu() {
        setShowlistMenu(!showlistMenu)
    }
    return (
        <nav className='navbar'>

            <div className={showlistMenu ? "nav-left showmenu" : 'nav-left'}>
                <div className="logo-banner">
                    <span
                        onClick={handleShowMenu}
                    >
                        <MenuBookIcon className='icon-material' /></span>
                    <img src={logonav} alt="ko hien anh" />
                </div>
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <Signin />
                    </li>
                    <li className='nav-list__item'>
                        <span><HomeOutlinedIcon className='icon-material' /></span>
                        <span>Home</span>
                    </li>
                    <li className='nav-list__item'>
                        <span><RestaurantOutlinedIcon className='icon-material' /></span>
                        <span>Order Online</span>
                    </li>
                    <li className='nav-list__item'>
                        <span>< LibraryBooksIcon className='icon-material' /></span>
                        <span>News</span>
                    </li>
                    <li className='nav-list__item'>
                        <span><AddBusinessIcon className='icon-material' /></span>
                        <span>Store Location</span>
                    </li>

                </ul>
            </div>
            <div className="nav-right">
                <div className="cart">
                    <span><ShoppingCartIcon className='icon-material' /></span>
                    <span className='cart-count'>0</span>
                </div>
                <div className="login">
                    <Signin />
                </div>
            </div>
        </nav>
    )
}

export default Navbar