const geolocationService = {
    getCurrentLocation() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject('Geolocation is not supported by this browser.');
        } else {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error.message)
          );
        }
      });
    },
  };
  
  export default geolocationService;
  