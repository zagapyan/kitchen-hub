import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeViewComponent from '../components/partials/RecipeViewComponent';
import * as mainViewActions from '../actions/mainViewActions';

function mapStateToProps(state) {
  console.log(state)
  return {
    recipes: state.recipeReducer.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(mainViewActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeViewComponent);