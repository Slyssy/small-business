import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBar from '../containers/LoginBar';

import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import cookie from 'cookie';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3BB371',
    },
    secondary: {
      main: '#E0E0E0',
    },
  },
});

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // * Checking cookie object to see if cookies.loggedIn is truthy.
  // console.log(cookies.loggedIn);
  return cookies['loggedIn'] ? true : false;
};

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='relative' color='primary'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: '1', color: 'white' }}>
            Austin Small Business
          </Typography>
          <ul className='nav-list'>
            <li className='nav-list-item'>
              <Typography style={{ color: 'white' }}>
                <Link to='/listings'>Listings</Link>
              </Typography>
            </li>
            {checkAuth() ? (
              <li className='nav-list-item'>
                <Typography style={{ color: 'white' }}>
                  <Link to='/addListing'>Add</Link>
                </Typography>
              </li>
            ) : null}
            <li
              className='nav-list-item'
              onClick={() => {
                document.cookie = cookie.serialize('loggedIn', null, {
                  maxAge: 0,
                });
                navigate('/login');
              }}
            >
              <Typography style={{ color: 'white' }}>
                {checkAuth() ? 'Logout' : 'Login'}
              </Typography>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      {checkAuth() ? <LoginBar /> : null}
    </ThemeProvider>
  );
};

export default Navigation;
