import React, { useState, useEffect } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { instance } from '../../../api/api'
import { forcedLogin } from '../../../redux/SliceReducer/CartUserSlice';
import { useDispatch } from 'react-redux/es/exports';
import axios from 'axios';
import Cookies from 'universal-cookie'
import PostComment from './PostComment';
const cookies = new Cookies();
const CommentItem = ({ element, setAllcomments }) => {
    const [commentItem, setCommentItem] = useState(element)
    const [isLike, setIslike] = useState(false)
    const [totalLike, setTotallike] = useState(null)
    const [showpostReply, setShowpostReply] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setCommentItem(element)
    }, [element])


    // console.log('element:::', element) //element la comment item
    useEffect(() => {
        if (cookies.get('accessToken')) { //neu chua dang nhap thi khong can check trang thai da like hay chua
            async function checkLikeComment() { //data la comment item
                try {
                    let getlike = await instance.get(`/likes/getstatuslikes/${element.id}`)
                    // console.log('getLike:::', getlike)
                    //user da like truoc do
                    if (getlike.data.errCode === 1) {
                        setIslike(true)
                    }
                    //user chua like
                    if (getlike.data.errCode === 0) {
                        setIslike(false)
                    }
                } catch (error) {

                }

            }
            //function kiem tra xem user truoc do da like hay chua. goi moi khi idcommentitem thay doi
            checkLikeComment()
        }

    }, [element.id]

    )

    //get total like in comment item
    useEffect(() => {
        async function getTotallike() {
            try {
                let totallikeData = await axios.get(`http://localhost:3001/likes/getTotallike/${element.id}`)
                setTotallike(totallikeData.data.totallike)
            } catch (error) {
                console.log("error in get totallike::", error)
            }


        }
        getTotallike()
    }, [element.id, isLike])

    function checkLength(number) {
        if (number.toString().length < 2) {
            return `0${number}`
        }
        return number
    }
    function getDateData(dateIso8601) {
        const date = new Date(dateIso8601);
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return `${weekday[date.getDay()].slice(0, 3)} ${checkLength(date.getDate())}-${checkLength(date.getMonth() + 1)}-${checkLength(date.getFullYear())}  ${checkLength(date.getHours())}:${checkLength(date.getMinutes())}:${checkLength(date.getSeconds())} `
    }
    async function handleLike(data) { //data la comment item

        try {

            let checklike = await instance.get(`/likes/checklike/${data.id}`)
            if (checklike.status === 200) {
                setIslike(true)
            }
            if (checklike.status === 204) {
                setIslike(false)

            }

        } catch (error) {
            console.log(error)
            dispatch(forcedLogin())

        }
    }

    function ishowInputReply() {
        //function co cho phep showReply in comment khong
        setShowpostReply(!showpostReply)
    }
    return (
        <div className="comment-item__container">
            <div className='comment-item' >
                <div className="comment-avartar">
                    {commentItem.username[0].toUpperCase()}
                </div>
                <div className="comment-info">
                    <div className="comment-info__content">

                        <div className='comment-info__contentdetails'> <h5>{commentItem.username}</h5>{commentItem.content}</div>
                    </div>
                    <div className="comment-info__options">
                        <span className={isLike ? 'op-like liked' : 'op-like'}
                            onClick={() => handleLike(commentItem)}
                        ><ThumbUpIcon className='line-icon' /> <span>{totalLike === 0 ? null : totalLike}</span></span>
                        <span className='replycomment' onClick={ishowInputReply}>
                            Reply
                        </span>
                        <span className='op-time'>
                            {getDateData(commentItem.updatedAt)}
                        </span>
                    </div>
                </div>

            </div>
            <PostComment show={showpostReply} marginleft={'50px'} isReply={true} commentItem={commentItem} setAllcomments={setAllcomments} setShowpostReply={setShowpostReply} />
        </div>

    )
}

export default CommentItem