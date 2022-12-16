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
import DeleteIcon from '@mui/icons-material/Delete';
import cookie from 'cookie';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // * Checking cookie object to see if cookies.loggedIn is truthy.
  // console.log(cookies.loggedIn);
  return cookies['loggedIn'] ? true : false;
};

const Listings = (props) => {
  // console.log(props);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {checkAuth() ? <TableCell>Delete</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={`listing__${listing.id}`}>
              <TableCell component='th' scope='row'>
                <Typography
                  sx={{ textDecoration: 'underline' }}
                  // onClick={() => props.getCoordinates(listing.address)}
                >
                  <Link to={`/listings/${listing.id}`}>
                    {listing.business_name}
                  </Link>
                </Typography>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>{listing.address}</TableCell>
              {checkAuth() ? (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.deleteListing(idx)}
                    className='icon text-red'
                    color='warning'
                  />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
