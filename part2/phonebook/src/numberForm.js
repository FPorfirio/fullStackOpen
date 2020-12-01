import React, { useState } from 'react'

const numberForm = ( {inputHandler, formHandler} ) => {
    return (
        <div>
            <h2>Add new number</h2>
            <form onSubmit={formHandler} action="">
                <label htmlFor="">
                    Name:
                    <input onChange={inputHandler} type="text" name="" id=""/>
                </label>
                <br/>
                <label htmlFor="">
                    Number:
                    <input onChange={inputHandler} type="number" name="" id=""/>
                </label>
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default numberForm