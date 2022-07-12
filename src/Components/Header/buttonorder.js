import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

export const ButtonAddcart = () => {
    return (

        <button style={{ marginTop: 0, textAlign: 'center' }}>
            <AddShoppingCartIcon className='icon-material' style={{ marginRight: '10px' }} />Order Now
        </button>


    )
}
export default Buttonorder