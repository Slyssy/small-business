import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const Login = (props) => {
  // console.log(props);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleTextChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // console.log(user);
  const login = (e) => {
    e.preventDefault();
    // # Send POST request to server for user.
    const payload = { ...user };
    props.userLogin(payload);
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
            value={user.username}
            name='username'
            label='Username'
            type='text'
            variant='standard'
          />
          <TextField
            required
            onChange={handleTextChange}
            value={user.password}
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
