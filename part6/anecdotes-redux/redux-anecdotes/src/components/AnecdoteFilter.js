import React from 'react'
import {setFilter} from '../reducers/filterReducer'
import {connect} from 'react-redux'

const AnecdoteFilter = (props) => {
	const handleChange = (e) => {
		const filter = e.target.value
		console.log(filter)
		props.setFilter(filter)
	}	

	return (
		<div>
			<input type="text" name="filter" id="" onChange={handleChange}/>
		</div>
	)
}

const mapDispatchToProps = {
	setFilter
}

const connectedFilter = connect(
	null, 
	mapDispatchToProps
)(AnecdoteFilter)

export default connectedFilter