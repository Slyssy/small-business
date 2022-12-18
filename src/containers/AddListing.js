import { connect } from 'react-redux';
import AddListing from '../components/AddListing';
import { addListing } from '../redux/actions';
import { getCoordinates } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    coordinates: state.coordinates,
    dialogOpen: state.dialogOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    getCoordinates: (address) => dispatch(getCoordinates(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
