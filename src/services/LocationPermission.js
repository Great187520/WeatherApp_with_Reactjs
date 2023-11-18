import React, { useState } from 'react';
import { getCurrentLocation } from '../services/geolocation';

const LocationPermission = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  const handleGrantPermission = async () => {
    try {
      const location = await getCurrentLocation();
      // Use location data
      console.log('Location data:', location);
      setPermissionGranted(true);
    } catch (error) {
      console.error('Error getting location:', error);
      // Display error message or handle the error
    }
  };

  return (
    <div>
      {!permissionGranted ? (
        <button onClick={handleGrantPermission}>Grant Location Permission</button>
      ) : (
        <p>Location permission granted. Display city details here.</p>
      )}
    </div>
  );
};

export default LocationPermission;
