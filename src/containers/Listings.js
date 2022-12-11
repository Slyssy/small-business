import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { deleteListing } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (index) => dispatch(deleteListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
