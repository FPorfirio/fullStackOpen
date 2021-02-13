
export const setFilter = (filter) => {
	return {
		type: 'SET_WORD_FILTER',
		filter
	}
}

const reducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_WORD_FILTER':
			return action.filter
			
		default:
			return state
	}
}

export default reducer