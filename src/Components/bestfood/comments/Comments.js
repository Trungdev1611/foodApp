import React from 'react'
import { useState, useEffect } from 'react'
import './comments.scss'
import { useSelector, useDispatch } from 'react-redux'
import { instance } from '../../../api/api'
import { forcedLogin } from '../../../redux/SliceReducer/CartUserSlice'
import CommentItem from './CommentItem'
const Comments = ({ foodItem }) => {
    const [valuecomment, setValuecomment] = useState('')
    const [allcomments, setAllcomments] = useState([])
    const selector = useSelector(state => state.AuthSliceReducer)
    const [sortCommentlike, setSortCommentlike] = useState(false)
    const dispatch = useDispatch()
    function handleChangeComment(e) {
        console.log(e.target.value)
        if (!e.target.value) {
            setValuecomment('')
        }
        setValuecomment(e.target.value)

    }
    //get commetns
    useEffect(() => {
        async function getComment() {
            try {
                let commentsDB = await instance.get(`/comments/getcomments/${foodItem.id}`)
                setAllcomments(commentsDB.data.data)
            } catch (error) {
                console.log(error)
                // dispatch(forcedLogin())
            }

        }
        getComment()


    }, [foodItem.id, dispatch])

    //post comment
    async function handleSubmitComment() {
        console.log('foodItem', foodItem)
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
    console.log(valuecomment)
    console.log('allcoment:::', allcomments)
    const allcommentCopy = [...allcomments].reverse()
    // const allcommentCopy = [...allcomments]
    console.log('copy.reserve()::', allcommentCopy)
    console.log('allcoment2:::', allcomments)

    return (
        <div className='comments'>
            <h4>Reviews</h4>
            <textarea name="commentInput" placeholder='Type your review here....' value={valuecomment}
                onChange={handleChangeComment}
                onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSubmitComment() } }}
            ></textarea>
            <div className="postcomment">
                {selector.username && <div className="info-user">

                    <div className="avartar-user">
                        {selector.username[0].toUpperCase()}
                    </div>

                    <div className='user-name'>
                        {selector.username}

                    </div>

                </div>}
                <span onClick={handleSubmitComment} className='btn-postcomment'>Post Review</span>
            </div>
            <div className="getcomments-container">
                {(allcommentCopy && allcommentCopy.length > 0) ?
                    <div className="getcomments">
                        <div className="getcomments-filter">
                            <span className={sortCommentlike ? '' : 'getcomments-filter__active'}
                                onClick={() => setSortCommentlike(false)}
                            >Latest first </span>
                            <span className={!sortCommentlike ? '' : 'getcomments-filter__active'}
                                onClick={() => setSortCommentlike(true)}
                            >Highest rated</span>
                        </div>
                        {allcommentCopy.map((ele, index) => {
                            console.log('ele:::', ele.content)
                            return (
                                < CommentItem element={ele} key={index} />
                            )


                        })} </div>
                    : null}
            </div>
        </div>
    )
}

export default Comments