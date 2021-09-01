import React, {useState} from 'react';
//Hooks
import {useAxiosGet} from '../Hooks/HttpRequest';
//Components
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import Pagination from '../Components/Pagination';
import Select from '../Components/Select';

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

    if(productList.error){
        content = <div> There was an error...Tray again later</div>
    }
    
    if(productList.data){

        chooseProductsPerPageDropDown = <div >
            <Select  productsPerPage = {productsPerPage} setProductsPerPage = {setProductsPerPage}/>
        </div>

        const paginate = (page) => setCurrentPage(page)
        const numberOfPages = Array( Math.ceil(productList.data.length / productsPerPage)).fill(0)
        .map((el,index) => el = index + 1);

        pagination = <ul className="flex m2">
                        <Pagination numberOfPages = {numberOfPages} paginate = {paginate}/>
                      </ul>

        const currentProducts = productList.data.slice(indexOfFirstProduct, indexOfLastProduct);

        content = currentProducts.map((product) =>{
            return (                
                    <div key = {product.id}>
                        <ProductCard product={product}/>
                    </div>
                )
        }); 
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