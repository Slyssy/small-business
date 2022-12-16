import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import MyMap from './Map';
import { Action } from '@remix-run/router';

const AddListing = (props) => {
  console.log(props);
  const [listing, setListing] = useState({
    business_name: '',
    address: '',
    hours: '',
    description: '',
    id: props.listings.length + 1,
  });

  const handleTextChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setListing((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleCoordinates = () => {
    props.getCoordinates(listing.address);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const payload = { ...listing };
    console.log(payload);
    props.addListing(payload);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
      }}
    >
      <Box sx={{ width: '60%', maxWidth: '520px' }}>
        <TextField
          required
          value={listing.name}
          onChange={handleTextChange}
          name='business_name'
          label='Name'
          type='text'
          variant='standard'
          fullWidth={true}
          sx={{ display: 'block' }}
        />
        <TextField
          required
          value={listing.address}
          onChange={handleTextChange}
          onBlur={handleCoordinates}
          name='address'
          label='Address'
          type='text'
          variant='standard'
          fullWidth={true}
          sx={{ display: 'block' }}
        />
        <TextField
          required
          value={listing.hours}
          onChange={handleTextChange}
          name='hours'
          label='Hours'
          type='text'
          variant='standard'
          fullWidth={true}
          sx={{ display: 'block' }}
        />
        <TextField
          required
          value={listing.description}
          onChange={handleTextChange}
          name='description'
          label='Description'
          type='text'
          variant='standard'
          fullWidth={true}
          sx={{ display: 'block' }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleSave}
          sx={{ marginTop: '16px', width: '50%' }}
        >
          Save
        </Button>
      </Box>
      {!props.coordinates.lat ? (
        <Typography variant='h5' gutterBottom>
          Enter Address to Display Map
        </Typography>
      ) : (
        <MyMap lat={props.coordinates.lat} lng={props.coordinates.lng} />
      )}
    </Container>
  );
};

export default AddListing;
