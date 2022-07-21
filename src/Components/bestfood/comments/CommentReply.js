import React, { useState, useEffect } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CommentReply = ({ element }) => {

    const [commentItem, setCommentItem] = useState(element)
    const [isLike, setIslike] = useState(false)


    useEffect(() => {
        setCommentItem(element)
    }, [element])
    // console.log(element)

    function checkLength(number) {
        if (number.toString().length < 2) {
            return `0${number}`
        }
        return number
    }
    function getDateData(dateIso8601) {
        // console.log(dateIso8601)
        const date = new Date(dateIso8601);
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return `${weekday[date.getDay()].slice(0, 3)} ${checkLength(date.getDate())}-${checkLength(date.getMonth() + 1)}-${checkLength(date.getFullYear())}  ${checkLength(date.getHours())}:${checkLength(date.getMinutes())}:${checkLength(date.getSeconds())} `
    }
    //xử lý like đơn giản, không lưu vào database
    async function handleLike() { //data la comment item
        setIslike(!isLike)
    }

    // console.log(commentItem.usernameReply)

    return (
        <div className='comment-item commentReply' >

            <div className="comment-avartar">
                {commentItem.usernameReply[0].toUpperCase()}
            </div>
            <div className="comment-info">
                <div className="comment-info__content">

                    <div className='comment-info__contentdetails'> <h5>{element.usernameReply}</h5>{element.contentReply}</div>
                </div>
                <div className="comment-info__options">
                    <span className={isLike ? 'op-like liked' : 'op-like'}
                        onClick={() => handleLike(commentItem)}
                    ><ThumbUpIcon className='line-icon' /> </span>
                    {/* <span className='replycomment'
                    //   onClick={handleReply}
                    >
                        Reply
                    </span> */}
                    <span className='op-time'>
                        {getDateData(commentItem.updatedAt)}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default CommentReply


