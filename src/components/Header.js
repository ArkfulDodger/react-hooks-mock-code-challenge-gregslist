import React from "react";
import Search from "./Search";

function Header({ setListings, searchInput, setSearchInput }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setListings={setListings} searchInput={searchInput} setSearchInput={setSearchInput} />
    </header>
  );
}

export default Header;
