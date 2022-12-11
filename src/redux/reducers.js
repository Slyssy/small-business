import { CastRounded } from '@mui/icons-material';
import { combineReducers } from 'redux';

const user = (state = null) => state;

const listings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return [...state, action.value];
    case 'DELETE_LISTING':
      const listings = [...state];
      listings.splice(action.value, 1);
      return CastRounded;
    default:
      return state;
  }
};

export default combineReducers({ user, listings });
