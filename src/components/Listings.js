import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const Listings = (props) => {
  console.log(props);
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={`listing__${listing.id}`}>
              <TableCell component='th' scope='row'>
                <Typography sx={{ textDecoration: 'underline' }}>
                  <Link to={`/listings/${listing.id}`}>
                    {listing.business_name}
                  </Link>
                </Typography>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>{listing.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
