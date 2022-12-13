import { connect } from 'react-redux';
import Details from '../components/Details';
import { getCoordinates } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    coordinates: state.coordinates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoordinates: (address) => dispatch(getCoordinates(address)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
