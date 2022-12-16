import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Geocode from 'react-geocode';
import MyMap from './Map';

const Details = (props) => {
  console.log(props);

  const { id } = useParams();

  const listing = props.listings.find((listing) => listing.id === +id);
  console.log(listing);

  useEffect(() => {
    props.getCoordinates(listing.address);
    console.log(props.getCoordinates(listing.address));
  }, []);

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
      <MyMap lat={props.coordinates.lat} lng={props.coordinates.lng} />
    </Container>
  );
};

export default Details;
