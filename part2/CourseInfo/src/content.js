import React from 'react'
import Part from './part.js'
import Total from './total.js'

const Content = ({parts}) => { 
    return (
        <div>
            <ul>
                {parts.map((part) => <Part key={part.id} name={part.name}/> )}
            </ul>
            <Total parts={parts}/>
        </div>
    )
} 

export default Content