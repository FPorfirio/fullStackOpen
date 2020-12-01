import React, { useState, useEffect } from 'react'

const SearchBar = ({searchHandler}) => {
  return (
    <form action="">
      <input onChange={searchHandler} type="search" name="" id=""/>
    </form>
  )
}

export default SearchBar