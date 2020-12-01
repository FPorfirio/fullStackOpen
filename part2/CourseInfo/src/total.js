import React from 'react'

const Total = ({parts}) => {
    console.log(parts)
    const initialvalue = 0;
    return (
        <div>
            <p>Number of exercises {parts.reduce( (a,c) => a + c.exercises, 0)}</p>
        </div>
    )
}
export default Total