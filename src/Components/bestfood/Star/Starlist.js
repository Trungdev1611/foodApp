import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { sortstar } from './../../../redux/SliceReducer/foodlistSlice';
import { Link } from 'react-router-dom';
const Starlist = () => {
    const dispatch = useDispatch()
    return (
        <div className='star-list'>
            <div className="star-list__heading">
                Rate
            </div>
            <div className="star-vote">
                <Link to="_star=5" className="star-vote__item" onClick={() => dispatch(sortstar(5))}>
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    &nbsp;&nbsp;and up
                </Link>

                <Link to="_star=4" className="star-vote__item" onClick={() => dispatch(sortstar(4))}>
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarBorderIcon className='unvote' />
                    &nbsp;&nbsp;and up</Link>
                <Link to="_star=3" className="star-vote__item" onClick={() => dispatch(sortstar(3))}>
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarBorderIcon className='unvote' />
                    <StarBorderIcon className='unvote' /> &nbsp;&nbsp;and up</Link>

            </div>

        </div>
    )
}

export default Starlist