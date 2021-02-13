import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNewMessage} from '../reducers/messageReducer'
import {connect} from 'react-redux'

const AnecdoteForm = (props) => {
	const addAnecdote = async (e) => {
		e.preventDefault()
		const content = e.target.anecdote.value
		props.createAnecdote(content)
		props.setNewMessage('A new anecdote has been added', 5)
	}

	return (
		<form onSubmit={addAnecdote}>
			<input type="text" name="anecdote" id=""/>
			<button type="submit">Submit anecdote</button>
		</form>
	)
}

const mapDispatchToProps = {
	createAnecdote,
	setNewMessage
}

const connectedForm = connect(
	null,
	mapDispatchToProps
)(AnecdoteForm)

export default connectedForm