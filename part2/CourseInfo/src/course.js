import React from 'react'
import Header from './header.js'
import Content from './content.js'

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course