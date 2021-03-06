import React from 'react'

const SearchBar = ({ onChange, onSubmit, onKeyDown, term, requiredClass }) => {
  return (
    <form onSubmit={onSubmit} className="search">
      <div className="field">
        <div className="control">
          <input
            className={requiredClass}
            type="text"
            placeholder="Search for a Song, Artist or Album"
            name="term"
            onChange={onChange}
            value={term}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <select onKeyDown={onKeyDown} onChange={onChange} name="attribute">
            <option value="Any">All</option>
            <option value="songTerm">Song</option>
            <option value="albumTerm">Album</option>
            <option value="artistTerm">Artist</option>
          </select>
        </div>
      </div>

    </form>
  )
}

export default SearchBar
