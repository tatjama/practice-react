import React from 'react';

import HelloWorld from '../Components/HelloWorld'

function Home(){
    return(
        <div>
            <h1 className="text-2xl mb-3">Home page</h1>
            <HelloWorld name="Tanja"/>
        </div>
    )
}

export default Home;