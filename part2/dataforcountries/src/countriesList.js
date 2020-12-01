import React, { useState, useEffect } from 'react'

const CountriesList = ( {data, clickHandler} ) => {
    const listItems = data.map((country) =>
    <li key={country.alpha2Code}>
        <div>
            <span>{country.name}</span><button onClick={clickHandler}>Show</button>
        </div>
    </li>)

    return (
        <ul>{listItems}</ul>
    )
}

export default CountriesList