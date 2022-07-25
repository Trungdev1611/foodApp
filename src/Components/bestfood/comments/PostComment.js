import React, { useState } from 'react'
import { instance } from '../../../api/api'
import { forcedLogin } from '../../../redux/SliceReducer/CartUserSlice'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'universal-cookie'
const PostComment = ({ foodItem, setAllcomments, show, marginleft, isReply, commentItem, setShowpostReply }) => {
    const cookies = new Cookies();
    let tokenaccess = cookies.get('accessToken')
    const [valuecomment, setValuecomment] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector(state => state.AuthSliceReducer)
    function handleChangeComment(e) {
        // console.log(e.target.value)
        if (!e.target.value) {
            setValuecomment('')
        }
        setValuecomment(e.target.value)

    }

    async function handleSubmitComment() {
        // console.log('foodItem', foodItem)
        if (valuecomment) {
            try {
                let commentPost = await instance.post('/comments/postcomment', {
                    content: valuecomment,
                    idfooditem: foodItem.id
                })
                setAllcomments(prev => [...prev, commentPost.data.data])
            }
            catch (error) {
                console.log(error)
                dispatch(forcedLogin())
            }

            setValuecomment('')
        }

    }

    async function handleReplyComment() {
        // console.log('foodItem', foodItem)

        if (valuecomment) {
            try {
                let replyPost = await instance.post('/reply/replycomment', {
                    contentReply: valuecomment,
                    commentId: commentItem.id
                })
                // console.log(replyPost)

                // allComment : 
                // { Replycomments: []
                // content: "test lai lan 3"
                // createdAt: "2022-07-21T03:34:53.000Z"
                // id: 14
                // idfooditem: "bo-ssam-dinner-for-4-6"
                // updatedAt: "2022-07-21T03:34:53.000Z"
                // username: "testuserid2" }

                setAllcomments(prev => {
                    //find Id object comment can cap nhat
                    // console.log(prev)
                    let findIndex = prev.findIndex(ele => ele.id === replyPost.data.data.commentId)
                    // console.log(findIndex, replyPost.data.data.commentId)
                    //neu co key Reply comments trong phan tu findIndex can tim thi lay, khong thi cho prev[findIndex].Replycomments = []
                    prev[findIndex].Replycomments = prev[findIndex].Replycomments || []
                    //destructuring mang reply trong allcomment
                    let { Replycomments } = prev[findIndex]
                    //neu chua co mang reply comment trong object ban dau

                    //push gia tri comment vua post len vao array Reply comment de render lai
                    Replycomments.push(replyPost.data.data)
                    //Khi nhan button reply thi ẩn ô input reply
                    setShowpostReply(false)
                    return [...prev]



                })
            }
            catch (error) {
                console.log(error)
                dispatch(forcedLogin())
            }

            setValuecomment('')
        }

    }
    return (
        <div style={show ? { display: 'block', marginLeft: marginleft } : { display: 'none' }}>
            <textarea name="commentInput" placeholder='Type your review here....' value={valuecomment}
                onChange={handleChangeComment}
                onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSubmitComment() } }}
            ></textarea>
            <div className="postcomment">
                {selector.username && tokenaccess &&
                    <div className="info-user">

                        <div className="avartar-user">
                            {selector.username[0].toUpperCase()}
                        </div>

                        <div className='user-name'>
                            {selector.username}

                        </div>

                    </div>}
                {!isReply && <span onClick={handleSubmitComment} className='btn-postcomment'>Post Review</span>}
                {isReply && <span onClick={handleReplyComment} className='btn-postcomment' >Reply</span>}
            </div>
        </div>
    )
}

export default PostComment