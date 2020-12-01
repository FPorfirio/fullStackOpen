import React, { useState } from 'react'

const SearchBar = ( {searchHandler} ) => {
    return (
        <div>
            <form action="">
                <input onChange={searchHandler} type="search" name="" id=""/>
            </form>
        </div>
    )
}

export default SearchBar