import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Starlist = () => {
    return (
        <div className='star-list'>
            <div className="star-list__heading">
                Rate
            </div>
            <div className="star-vote">
                <div className="star-vote__item">
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    &nbsp;&nbsp;and up
                </div>

                <div className="star-vote__item">
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarBorderIcon className='unvote' />
                    &nbsp;&nbsp;and up</div>
                <div className="star-vote__item">
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarRateIcon className='vote' />
                    <StarBorderIcon className='unvote' />
                    <StarBorderIcon className='unvote' /> &nbsp;&nbsp;and up</div>

            </div>

        </div>
    )
}

export default Starlist