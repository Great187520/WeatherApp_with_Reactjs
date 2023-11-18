import React from 'react';

const WeatherList = ({ cities, onRemoveCity }) => {
  return (
    <div>
      <h2>Weather for the largest cities:</h2>
      <ul>
        {cities.map(city => (
          <li key={city.name}>
            {city.name} - {city.temperature}°C 
            <button onClick={() => onRemoveCity(city.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
