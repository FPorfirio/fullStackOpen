import React, { useState, useEffect } from 'react'

const CountryInfo = ( {data} ) => {
  console.log(data.weather?.temp_c)
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        capital: {data.capital}
        <br/>
        population: {data.population}
      </div>

      <div>
        <h3>Spoken Languages</h3>
        <ul>
          {data.languages.map(language => 
          <li key={language.name}>
            {language.name}
          </li>)}
        </ul>
      </div>

      <div>
        <h3>Weather in {data.capital}</h3>
        temperature: {data.weather?.temp_c} 
        <br/>
        <img src={data.weather?.condition.icon} alt=""/>
        <br/>
        wind: {data.weather?.wind_mph} mph direction {data.weather?.wind_dir}
      </div>
    </div>
  )
}

export default CountryInfo