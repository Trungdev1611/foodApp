import React, { useEffect, useState } from 'react'
import logonav from './../../assets/image/logo.59e734ae.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Signin from '../Singn/Signin';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { togglelistMenuNav } from '../../redux/SliceReducer/foodlistSlice';
import { logout } from '../../redux/SliceReducer/AuthSlice';
import { cartDataActionCreator } from './../../redux/action/actioncreator'
import Cookies from 'universal-cookie';
import CartUser from '../CartUser/CartUser';
import Modal from './../modal/Modal'
import { instance } from '../../api/api';
const Navbar = () => {
    const { showlistMenu } = useSelector(state => state.foodlistReducer)
    const selector = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const [lengthCart, setLengthCart] = useState(0)
    const token = cookies.get('accessToken')

    function fixedTopNavbar() {
        let distanceToTop = window.pageYOffset
        if (distanceToTop > 65) {
            // console.log(distanceToTop)
            document.querySelector('.navbar').style.backgroundColor = "rgba(33,33,33, 0.8)"
            if (document.querySelector('.header')) {
                document.querySelector('.header').style.paddingTop = "0.7rem"

            }

        }
        else {
            document.querySelector('.navbar').style.backgroundColor = "transparent"
            if (document.querySelector('.header')) {
                document.querySelector('.header').style.paddingTop = "1rem"

            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', fixedTopNavbar)

        return () => {
            window.removeEventListener('scroll', fixedTopNavbar)
        }
    })


    //length Cart
    useEffect(() => {
        if (token) {
            // console.log('chay lai if trong useEffect')
            try {
                instance.get('/cart/lengthCart').then(data => setLengthCart(data.data.datalength))
            }
            catch (error) {
                console.log(error)
            }

        }
        else {
            setLengthCart(0)
        }
    }, [token, selector.cartData.length])


    // Toogle menu navbar
    function handleShowMenu() {
        dispatch(togglelistMenuNav())
    }

    //getData cart by user
    async function getDataCartUser() {
        dispatch(cartDataActionCreator())

    }

    function handleLogout() {
        dispatch(logout())
        cookies.remove('accessToken', { path: '/' })
        dispatch(togglelistMenuNav(false))
        setLengthCart(0)
    }
    // console.log(lengthCart)

    return (
        <nav className='navbar'>


            <div className={showlistMenu ? "nav-left showmenu" : 'nav-left'}>
                <div className="logo-banner">
                    <span onClick={handleShowMenu}>
                        <MenuBookIcon className='icon-material' />
                    </span>
                    <Link to="/home" className='logo-link'><img src={logonav} alt="ko hien anh" /></Link>
                </div>
                <ul className='nav-list'>
                    {<li className='nav-list__item'>
                        <div className='signin-mobile'>
                            <Signin />
                            {
                                //dang nhap roi thi hien thi user va logout; chua dang nhap thi hien thi sign in
                                (showlistMenu && cookies.get('accessToken')) &&
                                <span onClick={handleLogout}>Log out </span>
                            }
                        </div>

                    </li>}

                    <li className='nav-list__item'>
                        <Link to='/home' className='link-list__item'>
                            <span><HomeOutlinedIcon className='icon-material' /></span>
                            <span>Home</span>
                        </Link >
                    </li>
                    <li className='nav-list__item' onClick={() => dispatch(togglelistMenuNav(false))}>
                        <Link to='/listfood' className='link-list__item'>
                            <span><RestaurantOutlinedIcon className='icon-material' /></span>

                            <span>Order Online</span>
                        </Link >
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
                <div className="cart"
                    onClick={getDataCartUser}
                >
                    <span><ShoppingCartIcon className='icon-material' /></span>
                    <span className='cart-count'>{lengthCart}</span>
                </div>
                <div className="signin-container">
                    <Signin handleLogout={handleLogout} />
                </div>
            </div>
            {showlistMenu ? <div className={'modal'}
                onClick={() => dispatch(togglelistMenuNav())}
            ></div> : ''}

            {selector.isShowCart && <CartUser />}
            {selector.isModalLogin && <Modal />}
        </nav>
    )
}

export default Navbar