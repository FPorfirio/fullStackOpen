import React from 'react'
import Statistic from './statistic.js'

const Statistics = ({good, neutral, bad}) => {
  console.log(good,neutral,bad)
  const all = good + neutral + bad;
  const average = (all / 3).toFixed(2)
  const positive = Math.round((good * 100) / all);

  if(good||neutral||bad){
    return (
      <table>
        <tbody>
            <Statistic text="Good" count={good}/>
            <Statistic text="Neutral" count={neutral}/>
            <Statistic text="Bad" count={bad}/>
            <Statistic text="All" count={all}/>
            <Statistic text="Average" count={average}/>
            <Statistic text="Positive" count={positive}/>
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
}

export default Statistics 