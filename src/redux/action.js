import Geocode from 'react-geocode';

const apiKey = process.env.REACT_APP_API_KEY;

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
  console.log(address);
  return (dispatch) => {
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('en');
    Geocode.setLocationType('ROOFTOP');
    Geocode.fromAddress(address)
      .then((res) => {
        return res.results[0].geometry.location;
      })
      .then((response) => {
        const action = {
          type: 'GET_COORDINATES',
          value: response,
        };
        console.log(action);
        dispatch(action);
      });
  };
};
