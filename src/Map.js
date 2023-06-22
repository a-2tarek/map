import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCfcAquXGgSK45S5X8Cq7W1a7lJk7H8j4A">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      />
    </LoadScript>
  );
};

export default Map;
