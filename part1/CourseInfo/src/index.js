import React from 'react'
import ReactDOM from 'react-dom'
import Total from './total.js'
import Content from './content.js'
import Header from './header.js'

const App = () => {
  const parts = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    

  return (
    <div>
      <Header course={parts}/>
      <Content course={parts}/>
      <Total course={parts}/>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))