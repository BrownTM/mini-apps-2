import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Enter any keyword to search:
        <input className="searchBar" onChange={props.handleChange} type="text" name="searchPhrase" />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
