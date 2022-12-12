import { connect } from 'react-redux';
import Details from '../components/Details';
import { getCoordinates } from '../redux/action';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoordinates: () => dispatch(getCoordinates()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
