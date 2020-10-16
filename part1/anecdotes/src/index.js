import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Anecdote from './anecdote.js'
import Button from './button.js'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0]);
  const selectedAnecdote = anecdotes[selected];
  const selectedPoints = points[selected];
  const highestVote = Math.max(...points);
  const mostVoted = anecdotes.find( (anecdote, i) => i == points.indexOf(highestVote));
  const pointsCopy = [...points]
  pointsCopy[selected] += 1
  const generateRandomInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min);

  console.log(mostVoted)

  if(points.some( (point) => point > 0)) {
    console.log('ass')
    return (
      <div>
        <Anecdote anecdote={selectedAnecdote} text="Anecdote of the day" points={selectedPoints} />
        <Button text="Vote" clickHandler={() => setPoints(pointsCopy)}/>
        <Button text="Next anecdote" clickHandler={() => setSelected(generateRandomInt(0,5))} />
        <Anecdote anecdote={mostVoted} text="Anecdote with most votes" points={highestVote} />
      </div>
    )
  }

  return (
    <div>
        <Anecdote anecdote={selectedAnecdote} text="Anecdote of the day" points={selectedPoints} />
        <Button text="Vote" clickHandler={() => setPoints(pointsCopy)}/>
        <Button text="Next anecdote" clickHandler={() => setSelected(generateRandomInt(0,6))} />
      </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)