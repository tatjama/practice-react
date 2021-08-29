import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import Loader from '../Components/Loader';

function Product(){
    const[product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    });
    const { id } = useParams();
    const url = `https://612b855922bb490017893b72.mockapi.io/products/${id}`;
    let content = null;

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url).then((response) =>{
            setProduct({
                loading: false,
                data: response.data,
                error: false,
            })
        }).catch(() =>{
            setProduct({
                loading: false,
                data: null,
                error: true,
            })
        })
    },[url])

    if(product.error){
        content = <div>
            There is an error, please refresh or try later...
        </div>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content =
            <div>
                <h1 className="font-bold text-2xl mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img src={product.data.images} alt={product.data.name}/>
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Product;