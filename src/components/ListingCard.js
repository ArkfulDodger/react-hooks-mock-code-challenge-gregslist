import React, { useState } from "react";

function ListingCard({ listing, removeListing }) {
  const { description, image, location } = listing;

  const [favorited, setFavorited] = useState(false);

  const handleLikeClick = () => setFavorited(favorited => !favorited);

  const handleTrashClick = () => removeListing(listing)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image || "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleTrashClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
