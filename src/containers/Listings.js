import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { getCoordinates } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
    coordinates: state.coordinates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoordinates: (address) => dispatch(getCoordinates(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
