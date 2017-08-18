import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import recipeActions from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(recipeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);