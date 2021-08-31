import React, {useState} from 'react';

function Pagination({numberOfPages, paginate}){
    const [activeIndex, setActiveIndex] = useState(1);

    const pagination = numberOfPages.map(page => {

            return(                
                <li 
                    className = "m-2 text-blue-500 "
                    key={`page${page}`}
                    onClick = {() => {
                        paginate(page)
                        setActiveIndex(page)
                    } }
                >
                   <span className = {activeIndex === page? "active": null}> {page}</span>
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