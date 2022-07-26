import React from 'react'
import { useState, useEffect } from 'react'
import './comments.scss'
import { instance } from '../../../api/api'
import CommentItem from './CommentItem'
import CommentReply from './CommentReply'
import PostComment from './PostComment'

const Comments = ({ foodItem }) => {
    const [allcomments, setAllcomments] = useState([])

    const [sortCommentlike, setSortCommentlike] = useState(false)


    //get commetns khi load page
    useEffect(() => {
        async function getComment() {
            try {
                let commentsDB = await instance.get(`/comments/getcomments/${foodItem.id}`)
                setAllcomments(commentsDB.data.data)
            } catch (error) {
                console.log(error)

            }

        }
        getComment()


    }, [foodItem.id])


    // console.log('allcoment:::', allcomments)
    const allcommentCopy = [...allcomments].reverse()

    // console.log('copy.reserve()::', allcommentCopy)


    return (
        <div className='comments'>
            <h4>Reviews</h4>

            <PostComment foodItem={foodItem} setAllcomments={setAllcomments} show={true} isReply={false} />

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

                            return (
                                <div key={index}>

                                    < CommentItem element={ele} setAllcomments={setAllcomments} />


                                    {(ele.Replycomments && ele.Replycomments.length > 0) &&
                                        ele.Replycomments.map((replyItem, index) => {
                                            return <CommentReply element={replyItem} key={index} />
                                        })}
                                </div>

                            )


                        })} </div>
                    : null}
            </div>
        </div>
    )
}

export default Comments