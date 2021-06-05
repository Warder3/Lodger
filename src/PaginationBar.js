import React from 'react'

const PaginationBar = ({chores, currPage, setCurrPage, choresPerPage}) => {



    const pageMinus = () => {
        if (currPage === 1) {
            alert('Too low')
            return;
        }
        else {
            setCurrPage(currPage-1);
        }
    }

    const pagePlus = () => {
        if (currPage == Math.ceil(chores.length / choresPerPage)) {
            alert('Too High')
            return; 
        }
        else {
            setCurrPage(currPage+1)
        }
    }

    return (
        <div className="pagination-bar-container">
            <button id="page-minus" onClick={pageMinus}>
                &#x2190;
            </button>
            <p id="currPage">
                {currPage}
            </p>
            <button id="page-plus" onClick={pagePlus}>
                &#x2192;
            </button>
        
        </div>
    )
}

export default PaginationBar
