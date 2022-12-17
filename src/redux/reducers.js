import { combineReducers } from 'redux';

const user = (state = [], action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return [...state, action.value];
    default:
      return state;
  }
};

const listings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, action.value];
    case 'DELETE_LISTING':
      const listings = [...state];
      listings.splice(action.value, 1);
      return listings;
    default:
      return state;
  }
};

const coordinates = (state = [], action) => {
  switch (action.type) {
    case 'GET_COORDINATES':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ user, listings, coordinates });
