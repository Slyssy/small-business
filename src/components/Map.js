import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Spinner from './Spinner';
const MyMap = (props) => {
  console.log(props);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <Spinner />;
  return <Map lat={props.lat} lng={props.lng} />;
};

const Map = (props) => {
  console.log(props);
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  );
};
export default MyMap;
