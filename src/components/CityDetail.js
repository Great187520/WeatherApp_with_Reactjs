import React from 'react';

const CityDetail = ({ cityWeather, onSaveNote, onRemoveNote }) => {
  return (
    <div>
      <h2>{cityWeather.name} Weather Details</h2>
      <p>Temperature: {cityWeather.temperature}</p>
      <textarea placeholder="Enter your notes..." />
      <button onClick={onSaveNote}>Save Note</button>
      <button onClick={onRemoveNote}>Remove Note</button>
    </div>
  );
};

export default CityDetail;
