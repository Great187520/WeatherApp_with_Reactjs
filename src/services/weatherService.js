// Example weather service utilizing weatherstack.com API (assuming an API key is used)
const API_KEY = 'a564af7a34dd71288baa35a7ae07714c';

const weatherService = {
  //async fetchWeatherForCity(cityName) {
  export const fetchWeatherForCity = async (cityName) => {
    try {
      const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}`);
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      const data = await response.json();
      return {
        name: data.location.name,
        temperature: data.current.temperature,
        // Other weather details as needed
      };
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  },
};

//Example structure for weatherService.js
/*export const fetchWeatherForCity = async (cityName) => {
  try {
    // Your code to fetch weather data for the given city
    // ...
    return weatherData; // Return the fetched weather data
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};*/


export default weatherService;
