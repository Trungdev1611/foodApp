import React from 'react'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './dropdown-filter.scss'
const DropdownFilter = () => {
    const [selected, setSelected] = useState('Price: Low To High')
    const [showbox, setShowbox] = useState(false)
    const data = [{ data: 'Price: Low To High' }, { data: 'Price: High To Low' }, { data: 'Rate: Low To High' }, { data: 'Rate: Low To High' }]


    function checkoutside() {
        console.log('aaaaaaaaaaaaa')
        setShowbox(false)
    }
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