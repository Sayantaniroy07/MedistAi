import React, { useEffect, useState } from "react";

const LocationPicker = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      {location ? (
        <p>
          Latitude: {location.lat}
          <br />
          Longitude: {location.lng}
        </p>
      ) : (
        <p>Detecting Location...</p>
      )}
    </div>
  );
};

export default LocationPicker;