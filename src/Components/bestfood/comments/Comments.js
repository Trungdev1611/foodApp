import React from 'react'
import { useState, useEffect } from 'react'
import './comments.scss'
import { useSelector, useDispatch } from 'react-redux'
import { instance } from '../../../api/api'
import { forcedLogin } from '../../../redux/SliceReducer/CartUserSlice'
const Comments = ({ foodItem }) => {
    const [valuecomment, setValuecomment] = useState('')
    const [allcomments, setAllcomments] = useState([])
    const selector = useSelector(state => state.AuthSliceReducer)
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
        try {
            let commentPost = await instance.post('/comments/postcomment', {
                content: valuecomment,
                idfooditem: foodItem.id
            })
            setAllcomments(prev => [commentPost.data.data, ...prev])
        }
        catch (error) {
            console.log(error)
            dispatch(forcedLogin())
        }

        setValuecomment('')
    }
    console.log(valuecomment)
    console.log(allcomments)
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
                <span onClick={handleSubmitComment} >Post Review</span>
            </div>
            <div className="getcomments">
                {(allcomments && allcomments.length > 0) ?
                    allcomments.map((ele, index) => {
                        return <div key={index} style={{ color: 'black' }}>
                            <div>{ele.username}::::</div>
                            <div>{ele.content}::::</div>
                        </div>
                    })
                    : null}
            </div>
        </div>
    )
}

export default Comments