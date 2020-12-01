import React, { useState } from 'react'

const NumberList = ( {persons, deleteHandler} ) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul> {persons.map( (person) => 
                <li key={person.id}>
                    {person.name}: {person.number}
                    <button onClick={(e => {deleteHandler(person)})}>Delete</button>
                </li>)
                }
            </ul>
        </div>
    )
}

export default NumberList