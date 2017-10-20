import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipePageComponent from '../components/RecipePageComponent';
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
)(RecipePageComponent);