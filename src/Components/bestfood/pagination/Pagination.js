import React from 'react'
import { Link } from 'react-router-dom'
import './pagination.scss'
import { useSelector, useDispatch } from 'react-redux'
import { actionincreasePage, actionsetpageselect, actiondecreasePage } from './../../../redux/SliceReducer/foodlistSlice'
import { useNavigate } from 'react-router-dom'
const Pagination = () => {

    const arrPage = []
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    const { countpage, pageselect } = selector
    const pagetotal = Math.ceil(countpage / 16)
    const navigate = useNavigate()
    function renderPage() {

        for (let i = 1; i <= pagetotal; i++) {
            arrPage.push(i)
        }
    }
    renderPage()
    function increasePage() {
        if (pageselect !== pagetotal) {
            // setPageselect(prev => prev + 1)
            dispatch(actionincreasePage())
            navigate(`?_page=${pageselect + 1}`)
        }
    }
    function decreasePage() {
        if (pageselect !== 1) {
            dispatch(actiondecreasePage())
            navigate(`?_page=${pageselect - 1}`)


        }
    }
    return (
        <div className='pagination'>
            <div className={pageselect === 1 ? 'pagination-item disable' : 'pagination-item'}
                onClick={decreasePage}
            >&#60;</div>
            {arrPage.map((ele, index) => {
                return <Link key={index} to={`?_page=${ele}`}
                    className={ele === pageselect ? "actived pagination-item" : "pagination-item"}
                    onClick={() => dispatch(actionsetpageselect(ele))}
                >{ele}</Link>
            })}
            <div className={pageselect === pagetotal ? 'pagination-item disable' : 'pagination-item'}
                onClick={increasePage}
            >&#62;</div>

        </div>
    )
}

export default Pagination