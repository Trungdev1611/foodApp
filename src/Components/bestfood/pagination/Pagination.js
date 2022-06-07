import React from 'react'
import { Link } from 'react-router-dom'
import './pagination.scss'
const Pagination = (props) => {

    const arrPage = []
    function renderPage() {

        for (let i = 1; i <= props.countPage; i++) {
            arrPage.push(i)
        }
        console.log(arrPage)
    }
    renderPage()
    function increasePage() {
        if (props.pageselect !== props.countPage) {
            props.setPageselect(prev => prev + 1)
        }
    }
    function decreasePage() {
        if (props.pageselect !== 1) {
            props.setPageselect(prev => prev - 1)
        }
    }
    return (
        <div className='pagination'>
            <div className={props.pageselect === 1 ? 'pagination-item disable' : 'pagination-item'}
                onClick={decreasePage}
            >&#60;</div>
            {arrPage.map((ele, index) => {
                return <Link key={index} to={`?_page=${ele}`}
                    className={ele === props.pageselect ? "actived pagination-item" : "pagination-item"}
                    onClick={() => props.setPageselect(ele)}
                >{ele}</Link>
            })}
            <div className={props.pageselect === props.countPage ? 'pagination-item disable' : 'pagination-item'}
                onClick={increasePage}
            >&#62;</div>

        </div>
    )
}

export default Pagination