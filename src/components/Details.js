import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Geocode from 'react-geocode';
import MyMap from './Map';
import { ActionTypes } from '@mui/base';

const Details = (props) => {
  console.log(props);

  const { id } = useParams();

  const listing = props.listings.find((listing) => listing.id === +id);
  console.log(listing);

  useEffect(() => {
    props.getCoordinates(listing.address);
  });
  // Geocode.setApiKey(process.env.REACT_APP_API_KEY);
  // Geocode.setLanguage('en');
  // Geocode.setLocationType('ROOFTOP');
  // let lat;
  // let lng;
  // Geocode.fromAddress(listing.address).then((response) => {
  //   const result = response.results[0].geometry.location;
  //   console.log(result);
  // });
  // console.log('Lat: ', lat, 'Long: ', lng);
  return (
    <Container maxWidth='sm' sx={{ marginTop: '2em' }}>
      <Typography variant='h4' gutterBottom>
        {listing.business_name}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        {listing.address}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        {listing.hours}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {listing.description}
      </Typography>
      <MyMap lat={55} lng={55} />
    </Container>
  );
};

export default Details;
