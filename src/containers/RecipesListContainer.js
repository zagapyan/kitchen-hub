import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipesListComponent from '../components/partials/RecipesListComponent';
import * as recipeActions from '../actions/recipeActions';

function mapStateToProps(state) {
  return {
    recipes: state.recipeReducer.recipes,
    timeStamp: state.recipeReducer.timeStamp,
    fetchRecipes: recipeActions.fetchRecipes,
    filterCurrentRecipe: recipeActions.filterCurrentRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(recipeActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListComponent);