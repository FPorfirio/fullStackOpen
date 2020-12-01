import React, { useState } from 'react'

const Notification = ({message}) => {

	const error = {
		background: 'grey',
		height: 200,
		width: "100%",
		color: 'red', 
		fontSize: 20,
		borderRadius: 25 
	}

	const success = {
		background: 'grey',
		color: 'green', 
		fontSize: 20,
		borderRadius: 25 
	}

	if(message.type == 'error'){
		console.log('success')
		return (
			<div style={error}>
				{message.text}
			</div>
		)
	}

	else if(message.type == 'success') {
		console.log('success')
		return (
			<div style={success}>
				{message.text}
			</div>
		)
	}
	else return(null)
}  

export default Notification