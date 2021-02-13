import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const notes = await axios.get(baseURL)
	return notes.data
}

const createNew = async content => {
	const formatedObj = {
		content,
		votes: 0 
	}
	const response = await axios.post(baseURL, formatedObj)
	return response.data
}

const update = async anecdote => {
	const id = anecdote.id
	const formatedObj = {
		...anecdote,
		votes: anecdote.votes + 1
	}
	const response = await axios.put(`${baseURL}/${id}`, formatedObj)
	return response.data
}

export default {getAll, createNew, update}