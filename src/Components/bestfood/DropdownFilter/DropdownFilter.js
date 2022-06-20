import React, { useEffect } from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './dropdown-filter.scss'
import { arrangementbyPrice } from '../../../redux/SliceReducer/foodlistSlice';
import { useDispatch } from 'react-redux';
const DropdownFilter = () => {
    const [selected, setSelected] = useState('No Sort')
    const [showbox, setShowbox] = useState(false)
    const data = [{ data: 'Price: Low To High' }, { data: 'Price: High To Low' }, { data: 'Rate: Low To High' }, { data: 'Rate: High To Low' }, { data: 'No Sort' }]
    const dispatch = useDispatch()
    // click ra ngoai man hinh tat dropdown
    function checkoutside() {
        console.log('aaaaaaaaaaaaa')
        setShowbox(false)
    }
    useEffect(() => {

        switch (selected) {
            case 'No Sort':
                dispatch(arrangementbyPrice({ field: undefined, order: undefined }))
                break;
            case 'Price: Low To High':
                dispatch(arrangementbyPrice({ field: 'price', order: 'asc' }))
                break;
            case 'Price: High To Low':
                dispatch(arrangementbyPrice({ field: 'price', order: 'desc' }))
                break;
            case 'Rate: Low To High':
                dispatch(arrangementbyPrice({ field: 'rate', order: 'asc' }))
                break;
            case 'Rate: High To Low':
                dispatch(arrangementbyPrice({ field: 'rate', order: 'desc' }))
                break;
            default:
                break;


        }
    })

    function handleSelect(ele) {
        setSelected(ele.data)
        setShowbox(false)
    }
    return (
        <div className='dropdown-filter' onBlur={checkoutside} tabIndex={0} >
            <div className='selected'
                onClick={() => setShowbox(!showbox)}
            >{selected}
                <KeyboardArrowDownIcon className='iconselect' />
            </div>
            <div className="select-list">

                {showbox ? data.map((ele, index) => {
                    return <div key={index} className='select-list__item'
                        onClick={() => handleSelect(ele)}
                    >{ele.data}</div>
                }) : null}
            </div>


        </div>
    )
}

export default DropdownFilter