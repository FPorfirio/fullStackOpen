import anecdoteService from '../services/anecdotes'

export const createAnecdote = (anecdote) => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(anecdote)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote
		})
	}
}

export const voteAnecdote = (anecdote) => {
	return async dispatch => {
		const updatedAnecdote = await anecdoteService.update(anecdote)
		dispatch({
			type: 'VOTE_ANECDOTE',
			data: updatedAnecdote
		})
	}
}


export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		console.log(anecdotes)
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

const reducer = (state = [], action) => {
	switch(action.type) {
		case 'NEW_ANECDOTE':
			return state.concat(action.data)

		case 'VOTE_ANECDOTE': {
			const updatedAnecdote = action.data
			const id = action.data.id
			return state.map( anecdote => anecdote.id != id ? anecdote : updatedAnecdote)
		}

		case 'INIT_ANECDOTES':
			return action.data
		
		default:
			return state
	}
}

export default reducer