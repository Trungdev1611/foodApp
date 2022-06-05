import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './pagination.scss'
const Pagination = () => {
    const [pageselect, setPageselect] = useState(1)
    const selector = useSelector(state => state.data)
    const countPage = Math.ceil(selector.length / 16)
    const arrPage = []


    function renderPage() {

        for (let i = 1; i <= countPage; i++) {
            arrPage.push(i)
        }
        console.log(arrPage)
    }
    renderPage()
    function increasePage() {
        if (pageselect !== countPage) {
            setPageselect(prev => prev + 1)
        }
    }
    function decreasePage() {
        if (pageselect !== 1) {
            setPageselect(prev => prev - 1)
        }
    }
    return (
        <div className='pagination'>
            <div className={pageselect === 1 ? 'pagination-item disable' : 'pagination-item'}
                onClick={decreasePage}
            >&#60;</div>
            {arrPage.map((ele, index) => {
                return <Link key={index} to={`page=${ele}`}
                    className={ele === pageselect ? "actived pagination-item" : "pagination-item"}
                    onClick={() => setPageselect(ele)}
                >{ele}</Link>
            })}
            <div className={pageselect === countPage ? 'pagination-item disable' : 'pagination-item'}
                onClick={increasePage}
            >&#62;</div>

        </div>
    )
}

export default Pagination