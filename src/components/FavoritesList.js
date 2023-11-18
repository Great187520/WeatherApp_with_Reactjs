import React from 'react';

const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            {city}
            <button onClick={() => onRemoveFavorite(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
