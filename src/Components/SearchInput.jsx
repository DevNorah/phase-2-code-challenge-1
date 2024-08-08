import React,{useState} from 'react'

const SearchInput = ({onSearch}) => {
    const [query, setQuery] =useState('')
    const handleSearch = (e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
    }
  return (
    <div>
        <input className="search-input" type="text" placeholder='Search...' value={query} onChange={handleSearch} />
    </div>
  )
}

export default SearchInput