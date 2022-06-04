import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'
const Search = () => {
    return (
        <div className='search'>
            <input type="text" placeholder='Search' />
            <SearchIcon className='search-icon' />
        </div>
    )
}

export default Search