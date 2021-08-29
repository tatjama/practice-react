import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home(){
    const[products, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    });
    
    const url = `https://612b855922bb490017893b72.mockapi.io/products?page=1&&limit=10`;
    
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url).then((response) =>{
            setProducts({
                loading: false,
                data: response.data,
                error: false,
            })
        }).catch(() =>{
            setProducts({
                loading: false,
                data: null,
                error: true,
            })
        })
    },[url])

    let content = null;
    if(products.error){
        content = <div>
            Hmmm, think that something gone wrong, please try again...
        </div>
    }

    if(products.loading){
        content = <div>
            <Loader/>
        </div>
    }

    if(products.data){
        content = 
        products.data.map((product) => {
            return(
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            )
        })

    }
    return(
        <div>
            <h1 className="text-2xl mb-3">Best Sellers</h1>
            {content}
        </div>
        
    )
}

export default Home;