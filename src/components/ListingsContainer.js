import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  const listingElements = listings.map( listing => {
    return <ListingCard key={listing.id} listing={listing} removeListing={removeListing} />
  })

  return (
    <main>
      <button>Sort by Location</button>
      <ul className="cards">
        {listingElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
