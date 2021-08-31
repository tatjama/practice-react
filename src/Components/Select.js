import React from 'react';

function Select({productsPerPage, setProductsPerPage}){
    return(
        <form>
            <label htmlFor ="productsPerPage">Choose Products per page
                <select 
                type = "number" 
                value = {productsPerPage}  
                onChange={(event) => setProductsPerPage(event.target.value)} 
                 className = "pl-10 pr-10 m-2" >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>    
                </select>
            </label>

        </form>
    )
}

export default Select;