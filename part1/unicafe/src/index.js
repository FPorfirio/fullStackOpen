import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './button.js'
import Statistics from './statistics.js'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button text="Good" clickHandler={() => setGood(good + 1)}/>
        <Button text="Neutral" clickHandler={() => {setNeutral(neutral + 1)}}/>
        <Button text="Bad" clickHandler={() => {setBad(bad + 1)}}/>
      </div>
      <div>
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)