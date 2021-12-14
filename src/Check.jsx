import React from 'react'

const Check = (props) => {
    console.log("render from child2")
    return (
        <>
          <h1>When data pass by props so memo dont work again render the component so we use usecallback in  parent component</h1>
          <p>please check the console and remove the useCallback you see the rendering </p>  
          <button style={{background:'red', color:'white'}} onClick={props.increase} >useCallback check</button>
        </>
    )
}

export default React.memo(Check);
