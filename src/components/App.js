import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";
// import { useState } from "react/cjs/react.production.min";

function App() {
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then( res => res.json())
      .then( data => setListings(data))
      .catch( error => alert(error.message));
  }, [])
  
  const addListing = (newListingData) => {
    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newListingData)
    })
      .then( res => res.json())
      .then( newListing => setListings([...listings, newListing]))
      .catch( error => alert(error.message));
  }
  
  const removeListing = (listingToRemove) => {
    fetch(`http://localhost:6001/listings/${listingToRemove.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then( res => {
        if (res.ok) {
          const updatedListings = listings.filter( listing => {
            return listing.id !== listingToRemove.id;
          })
          setListings(updatedListings);
        } else {
          alert('something went wrong');
        }
      })
      .catch( error => alert(error.message))
  }

  return (
    <div className="app">
      <Header setListings={setListings} searchInput={searchInput} setSearchInput={setSearchInput} />
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={listings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
