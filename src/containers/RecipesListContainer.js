import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipesListComponent from '../components/partials/RecipesListComponent';
import * as recipeActions from '../actions/recipeActions';

function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipeReducer.recipes,
    timeStamp: state.recipeReducer.timeStamp,
    fetchRecipes: state.fetchRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(recipeActions, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     ...fetchRecipes,
//     ...receiveRecipes
//   }, dispatch);
// }

// const mapDispatchToProps = {
//   ...fetchRecipes,
//   ...receiveRecipes
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListComponent);