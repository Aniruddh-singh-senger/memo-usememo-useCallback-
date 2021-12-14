import React from 'react'

const Memo = () => {
  
    console.log("render from child")
    return (
        <>
          <h1>When you are not want to render your child component so try memo </h1>
          <p>please check the console and remove memo you see the rendering </p>  
        </>
    )
}

export default React.memo(Memo);
