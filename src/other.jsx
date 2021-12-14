import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Other = () => {

    const [show, setShow] = useState("Great you got the data!  pass state using usenavigate and uselocation");

    const history = useNavigate();

    const handleSubmit = () => {
        history('/Routing', { state: show })
    }
    return (
        <>
        
        <div className='matter'>
        <h1>please click for data send to the routing component</h1>
            <button style={{width:'20%', height:'6%', background:'red',color:'white'}} onClick={() => { handleSubmit() }}>click</button>
        </div>
        </>
    )
}

export default Other;
