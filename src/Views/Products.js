import React, {useState} from 'react';

import {useAxiosGet} from '../Hooks/HttpRequest';

import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import Pagination from '../Components/Pagination';

function Products(){    
    const url = `https://612b855922bb490017893b72.mockapi.io/products/`;
    let productList = useAxiosGet(url);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    
    
    let content = null;
    let pagination = null;
    let chooseProductsPerPageDropDown = null;

    if(productList.loading){
        content = <Loader/>
    }

    
    if(productList.data){

        chooseProductsPerPageDropDown = <form >
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

        const paginate = (page) => setCurrentPage(page)
        const numberOfPages = Array( Math.ceil(productList.data.length / productsPerPage)).fill(0)
        .map((el,index) => el = index + 1);

        pagination = <ul className="flex m2">
                        <Pagination numberOfPages = {numberOfPages} paginate = {paginate}/>
                      </ul>

        const currentProducts = productList.data.slice(indexOfFirstProduct, indexOfLastProduct);
        console.log(currentProducts)
        content = currentProducts.map((product) =>{
            return (
                
                    <div key = {product.id}>
                        <ProductCard product={product}/>
                    </div>
                )
        }); 
    }

    if(productList.error){
        content = <div> There was an error...Tray again later</div>
    }
    return(
        <div>
           <h1 className="mb-10 text-center text-2xl"> List of Products</h1>   
            {chooseProductsPerPageDropDown}        
            {pagination}
            {content}
        </div>
    )
}

export default Products;