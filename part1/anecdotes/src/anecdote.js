import React from 'react'

const Anecdote = ({anecdote, points, text}) => {
    return (
        <div>
            <h2>{text}</h2>
            <p>{anecdote}</p>
            <p>Has {points} votes</p>
        </div>
    )
}

export default Anecdote