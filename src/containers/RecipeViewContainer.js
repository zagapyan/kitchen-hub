import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeViewComponent from '../components/partials/RecipeViewComponent';
import * as recipeActions from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    currentRecipe: state.recipeReducer.currentRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(recipeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeViewComponent);