import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                <Link to='/'>Listings</Link>
              </Typography>
            </li>
            <li
              className='nav-list-item'
              onClick={() => {
                document.cookie = cookie.serialize('loggedIn', null, {
                  maxAge: 0,
                });
                navigate('/login');
              }}
            >
              <Typography style={{ color: 'white' }}>Login</Typography>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
