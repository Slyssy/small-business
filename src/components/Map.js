import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = (props) => {
  console.log(props);
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  );
};
export default MyMap;
