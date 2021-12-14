import React from 'react';

import { useLocation } from "react-router-dom";

const Routing = () => {

    const location = useLocation();
    console.log(location)
    const myparam = location.state;
    return (
        <div className='uses'>
            <h1>{myparam}</h1>
            <div>   
            <h1>its empty</h1>
            <h3> if you want data please go to the other and click the button you get the data</h3>
            </div>
        </div>
    )
}

export default Routing;
