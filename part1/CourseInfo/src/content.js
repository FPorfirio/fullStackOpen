import React from 'react'
import Part from './part.js'

const Content = (props) => { 
    const parts = props.course.parts;
    return (
        <div>
            <Part part={parts[0].name} exercise={parts[0].exercise}/>
            <Part part={parts[1].name} exercise={parts[1].exercise}/>
            <Part part={parts[2].name} exercise={parts[2].exercise}/>
        </div>
    )
} 

export default Content