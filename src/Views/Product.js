import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Product(){
    const[product, setProduct] = useState(null);
    const { id } = useParams();
    const url = `https://612b855922bb490017893b72.mockapi.io/products/${id}`;
    let content = "Here come some products";

    useEffect(() => {
        axios.get(url).then((response) =>{
            setProduct(response.data)
        })
    },[url])

    if(product){
        content =
            <div>
                <h1 className="font-bold text-2xl mb-3">
                    {product.name}
                </h1>
                <div>
                    <img src={product.images} alt={product.name}/>
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.description}
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