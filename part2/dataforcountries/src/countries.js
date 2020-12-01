import React, { useState, useEffect } from 'react'
import CountryInfo from './countryInfo.js'
import CountriesList from './countriesList.js'

const Countries = ( {countriesData, clickHandler} ) => {
	console.log(countriesData)
	if(countriesData.length == 1){
		console.log('yes')
		return (
			<CountryInfo data={countriesData[0]}/>
		)
	}

	return(
		<CountriesList data={countriesData} clickHandler={clickHandler}/>
	)
}

export default Countries