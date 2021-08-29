import React  from 'react';
//Hooks
import {useAxiosGet} from '../Hooks/HttpRequest';
//Components
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';

function Home(){    
    const url = `https://612b855922bb490017893b72.mockapi.io/products?page=1&&limit=10`;
    
    let products = useAxiosGet(url);

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