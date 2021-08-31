import React from 'react';

function Pagination({numberOfPages, paginate}){
    const pagination = numberOfPages.map(page => {
            return(                
                <li 
                    className = "m-2 text-blue-500"
                    key={`page${page}`}
                    onClick = {() => paginate(page) }
                >
                    {page}
                </li>
            )
        })
        
    return(
        <>
            {pagination}
        </>
    )
}

export default Pagination