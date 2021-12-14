import React, { useState } from 'react';
import Check from './Check';
import Memo from './Memo';



const Usecallback = () => {

    const [count, setCount] = useState(0);

    const increase = React.useCallback(() => {
        setCount((ce) => ce + 1)
    }, [setCount])

    return (
        <><div className='App'>
            <h1> Performance increase {count} </h1>
            <Memo />
            <button style={{background:'red', color:'white'}} onClick={increase} >Memo check</button>
            <Check increase={increase} />
            </div>
        </>
    )
}

export default Usecallback;
