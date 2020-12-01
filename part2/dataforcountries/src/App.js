import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar.js'
import Countries from './countries.js'
import axios from 'axios'

function App() {
  const [countriesData, setCountriesData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  const searchHandler = (e) => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then( response => {
      const filteredCountries = response.data.filter( (country) => {
        const regex = new RegExp(e.target.value, "gi")
        return regex.test(country.name)
      })
      setCountriesData(filteredCountries);
    })
  }
  const clickHandler = (e) => {
    const selectedCountry = countriesData.find(country => country.name == e.target.previousElementSibling.textContent)  
    setCountriesData([selectedCountry])
  }

  useEffect( () => {
    if(countriesData.length == 1 && !('weather' in countriesData[0])){
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${countriesData[0].name}`)
      .then(response => {
        console.log(response)
        const newData = Object.assign({weather: response.data.current},JSON.parse(JSON.stringify(countriesData[0])))
        setCountriesData([newData])
      })
    }
  },[countriesData])

  return (
    <div>
      <SearchBar searchHandler={searchHandler}/>
      <Countries countriesData={countriesData} clickHandler={clickHandler}/>
    </div>
  )
}

export default App;
