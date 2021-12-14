import React, { useState } from 'react';

const UseMemo = () => {

    const [count, setCount] = useState(0);

    const increase = React.useCallback(() => {
        setCount((ce) => ce + 1)
    }, [setCount])

    const result = React.useMemo(() => {
        let i = 0;
        console.time("result");
        while (i < 1000000) {
            i++;
        }
      
        console.timeEnd("result");
        return 90;
    }, []);

    return (
        <><div className='matter'> 
            <h1 > Performance increase {count} <br /> result : {result} </h1>
            <p>please check console and remove the useMemo to see the rendering</p>
            <button style={{background:'red', color:'white'}} onClick={increase} >UseMemo check</button>
            </div>
        </>
    )
}
export default UseMemo;
