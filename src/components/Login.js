import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleTextChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    // # Send POST request to server for user.

    // # If successful...
    //Todo: set cookie here
    //Todo: set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = 'loggedIn=true;max-age=60*1000';
    navigate('/');
  };

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

  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <form className='login-form' onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name='username'
            label='Username'
            type='text'
            variant='standard'
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name='password'
            label='Password'
            type='password'
            variant='standard'
          />
          <ThemeProvider theme={theme}>
            <Button
              onClick={login}
              type='submit'
              className='login-button'
              variant='contained'
              color='secondary'
            >
              Login
            </Button>
          </ThemeProvider>
        </form>
      </Container>
    </div>
  );
};

export default Login;
