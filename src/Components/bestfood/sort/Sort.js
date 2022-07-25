import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import './Sort.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeViewaction } from '../../../redux/SliceReducer/foodlistSlice';
const Sort = () => {
    const { changeView } = useSelector(state => state.foodlistReducer)
    const dispatch = useDispatch()
    function handleChangeView() {
        dispatch(changeViewaction())
    }
    // console.log(changeView)
    return (
        <div className='sort-wrapper'>
            <div className={changeView ? "sort-item active-icon" : "sort-item"}
                onClick={handleChangeView}
            ><ViewListIcon className='sort-icon' /></div>
            <div className={!changeView ? "sort-item active-icon" : "sort-item"}
                onClick={handleChangeView}
            ><ViewModuleIcon className='sort-icon' /></div>
        </div>
    )
}

export default Sort