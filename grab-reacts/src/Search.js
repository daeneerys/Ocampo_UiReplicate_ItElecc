import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
const Search = () => {
  return (
    <div className='search_container'>
        <h3 className='search_greeting'>Good Morning</h3>    
        <h1 className = 'search_heading'>Where should we deliver your food today?</h1>
        <div className='location_container'>
        <input placeholder="Type your location" className="location_search" maxlength="512" type="text" value=""></input>
        </div>
        <button type = 'button' className='search_button'>
            <span>Search</span>
        </button>
    </div>
  )
}

export default Search