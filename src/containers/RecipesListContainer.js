import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipesListComponent from '../components/partials/RecipesListComponent';
import { fetchRecipes, receiveRecipes } from '../actions/recipeActions';

function mapStateToProps(state, ownProps) {
  console.log(state)
  return {
    recipes: state.recipes,
    timeStamp: state.timeStamp,
    fetchRecipes: state.fetchRecipes
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     ...fetchRecipes,
//     ...receiveRecipes
//   }, dispatch);
// }

const mapDispatchToProps = {
  ...fetchRecipes,
  ...receiveRecipes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesListComponent);