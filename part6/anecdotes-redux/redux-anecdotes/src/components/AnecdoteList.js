import React from 'react'
import {connect} from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNewMessage} from '../reducers/messageReducer'

const Anecdote = ({content, voteHandler, votes}) => {
	return (
		<li>
			<div>
				{content}
				<br/>
					has {votes}
				<button onClick={voteHandler}>Vote</button>
			</div>
		</li>
	)
}

const AnecdoteList = (props) => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<ul>
				{
					props.anecdotes
						.sort((a, b) => b - a)
						.map( anecdote => {
							return (
								<Anecdote
									key={anecdote.id}
									content={anecdote.content} 
									voteHandler={() => {
										props.voteAnecdote(anecdote)
										props.setNewMessage(`you voted ${anecdote.content}`, 5)
									}
									}
									votes={anecdote.votes}
								/>
							)
						})	
				}
			</ul>
		</div>
	)
}	

const mapStateToProps = (state) => {
	if (state.filter) {
		return {
			anecdotes: state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
		}
	}
	return {
		anecdotes: state.anecdotes
	}
}

const mapDispatchToProps = {
	voteAnecdote,
	setNewMessage
}

const conectedAnecdotes = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList)

export default conectedAnecdotes