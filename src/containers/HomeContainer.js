import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { fetchRecipes } from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    fetchRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...fetchRecipes,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(HomeComponent);