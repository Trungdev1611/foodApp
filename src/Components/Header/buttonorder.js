import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './button.scss';
import { Link } from 'react-router-dom';
const Buttonorder = () => {
    return (
        <Link to='/listfood' >
            <button>
                <ShoppingCartIcon className='icon-material' />Order Now
            </button>
        </Link>

    )
}

export default Buttonorder