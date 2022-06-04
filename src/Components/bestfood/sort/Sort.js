import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import './Sort.scss'
const Sort = () => {
    return (
        <div className='sort-wrapper'>
            <div className="sort-item"><ViewListIcon className='sort-icon' /></div>
            <div className="sort-item"><ViewModuleIcon className='sort-icon' /></div>
        </div>
    )
}

export default Sort