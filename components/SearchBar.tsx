"use client"
import React from 'react'
import { SearchManufacturer } from '.'
import { useState } from 'react'
function SearchBar() {
    const [manufacturer, setmanufacturer] = useState("")
  const handleSearch = () =>{

  }
    return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer = { setmanufacturer}
        />

        </div>
    </form>
  )
}

export default SearchBar 