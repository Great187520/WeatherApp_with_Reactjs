import React from 'react';
import WeatherList from '../components/WeatherList';
import FavoritesList from '../components/FavoritesList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ cities, favorites, onRemoveCity, onAddFavorite, onRemoveFavorite, onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <WeatherList cities={cities} onRemoveCity={onRemoveCity} />
      <FavoritesList favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
    </div>
  );
};

export default HomePage;
