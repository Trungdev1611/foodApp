import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchbyInput } from '../../../redux/SliceReducer/foodlistSlice';
import './Search.scss'
const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function handleSearch() {
        if (inputValue.trim()) {
            dispatch(searchbyInput(inputValue))
            setInputValue('')

        }
    }
    return (
        <div className='search'>
            <input type="text" placeholder='Search'
                onChange={handleChange}
                onKeyPress={(e) => { if (e.key === 'Enter') { handleSearch() } }}
                value={inputValue}
            />
            <SearchIcon className='search-icon'
                onClick={handleSearch}
            />
        </div>
    )
}

export default Search