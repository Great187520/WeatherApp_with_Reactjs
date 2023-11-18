import React, { useState, useEffect } from 'react';
import { fetchWeatherForCity } from '../services/weatherService';
import CityDetail from '../components/CityDetail';

const CityDetailPage = ({ match }) => {
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    const cityName = match.params.cityName; // Assuming route parameter is cityName
    fetchWeatherData(cityName);
  }, [match.params.cityName]);

  const fetchWeatherData = async (cityName) => {
    try {
      const data = await fetchWeatherForCity(cityName);
      setCityWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSaveNote = () => {
    // Handle saving note functionality
  };

  const handleRemoveNote = () => {
    // Handle removing note functionality
  };

  return (
    <div>
      {cityWeather ? (
        <CityDetail 
          cityWeather={cityWeather} 
          onSaveNote={handleSaveNote} 
          onRemoveNote={handleRemoveNote} 
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CityDetailPage;
