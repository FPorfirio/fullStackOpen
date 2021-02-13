
let activeTimeout = false

export const setNewMessage = (message, delay) => {
	return dispatch => {
		dispatch({
			type: 'SET_MESSAGE',
			data: message
		})
		
		if(activeTimeout){
			console.log('clear')
			clearTimeout(activeTimeout)
		}

		activeTimeout = setTimeout(() => {
			dispatch({
				type: 'CLEAR_MESSAGE',
				data: ''
			})
			activeTimeout = false
		}, delay * 1000)
	}
} 

const reducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_MESSAGE':
			return action.data

		case 'CLEAR_MESSAGE':
			return ''
		
		default: 
			return state
	}
}

export default reducer