import React from "react";

function Search({ setListings, searchInput, setSearchInput }) {
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:6001/listings`)
      .then( res => res.json())
      .then( data => {
        setListings(data.filter( listing => listing.description.includes(searchInput)))
      })
      .catch( error => console.log(error.message));
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
