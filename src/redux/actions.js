import Geocode from 'react-geocode';

const apiKey = process.env.REACT_APP_API_KEY;
export const userLogin = (user) => {
  return {
    type: 'USER_LOGIN',
    value: user,
  };
};

export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing,
  };
};

export const deleteListing = (index) => {
  return {
    type: 'DELETE_LISTING',
    value: index,
  };
};

// * Create an action to get latitude and longitude.
export const getCoordinates = (address) => {
  return (dispatch) => {
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('en');
    Geocode.setLocationType('ROOFTOP');
    Geocode.fromAddress(address).then((res) => {
      const action = {
        type: 'GET_COORDINATES',
        value: res.results[0].geometry.location,
      };
      // console.log(action);
      dispatch(action);
    });
  };
};

// * Open Dialog Box
export const openDialog = () => {
  return {
    type: 'OPEN_DIALOG',
    value: true,
  };
};
