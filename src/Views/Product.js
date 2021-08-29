import React from 'react';
import {useParams} from 'react-router-dom';
//Hooks
import {useAxiosGet} from '../Hooks/HttpRequest';
//Components
import Loader from '../Components/Loader';

function Product(){    
    const { id } = useParams();
    const url = `https://612b855922bb490017893b72.mockapi.io/products/${id}`;
    let content = null;

    let product = useAxiosGet(url);

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