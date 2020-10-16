import React from 'react';

const Button = ({text, clickHandler}) => { 
    console.log(clickHandler)  
    return (
        <button onClick={clickHandler}>{text}</button>
    )
}

export default Button