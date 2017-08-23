import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipesListComponent from '../components/partials/RecipesListComponent';
import { fetchRecipes, receiveRecipes } from '../actions/recipeActions';

function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes,
    fetchRecipes: state.fetchRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...fetchRecipes,
    ...receiveRecipes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListComponent);