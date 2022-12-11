import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Listings from './containers/Listings';
import Details from './components/Details';
import AddNewListing from './components/AddNewListing';
// import { Details } from '@mui/icons-material';

//Todo: Write checkAuth function here
//Todo: Check the cookies for a cookie called "loggedIn"
// # Cookie NPM Docs can be found here...
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  // * Checking cookie object to see if cookies.loggedIn is truthy.
  return cookies['loggedIn'] ? true : false;
};

//Todo: Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  //   console.log(props);
  // # Destructure the props object.
  // # Using the rest pattern to add the rest of the props assigned when we call the component.
  const { component: Component, ...rest } = props;
  console.log(rest);
  // # Using Component variable assigned above to render a component if logged in.
  // # If user is not logged in they are pointed back to the login page using the "Navigate" component from react-router.
  // # Also unpacking the rest of the props into the component by using the spread operator.
  return checkAuth() === true ? <Component /> : <Navigate to='/login' />;
};

const Router = () => {
  return (
    <Routes>
      {/* Setting component prop to Home for protected home route */}
      <Route path='/' element={<ProtectedRoute component={AdminDashboard} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/listings' element={<Listings />} />
      <Route path='/listings/:id' element={<Details />} />
      <Route path='/addNewListing' element={<AddNewListing />} />
    </Routes>
  );
};

export default Router;
