import {
  FETCH_RECIPES,
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  REJECTED_FETCH,
  HANDLE_DELETE_RECIPE,
  RECEIVE_DELETE_RECIPE,
  REJECT_DELETE_RECIPE,
  CURRENT_RECIPE,
  FILTER_RECIPE,
} from '../actions/domainActions';

const initalState={
  currentRecipe: {},
  recipes: [],
  filteredRecipes: [],
  timeStamp: '',
  filtering: false,
  filterPayload: ''
}

export default function recipeReducer(state=initalState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
      }
    case REQUEST_RECIPES:
      return {
        ...state,
        recipes: action.recipes
      }
    case RECEIVE_RECIPES:
      return{
        ...state,
        timeStamp: action.timeStamp,
        recipes: action.recipes
      }
    case HANDLE_DELETE_RECIPE:
      return{
        ...state
      }
    case RECEIVE_DELETE_RECIPE:
      return{
        ...state
      }
    case REJECT_DELETE_RECIPE:
      return{
        ...state
      }
    case FILTER_RECIPE:
      return{
        ...state,
        filtering: action.filtering,
        filteredRecipes: state.recipes.filter(o=>
          o.title
            .toLowerCase()
            .includes(action.filterPayload.toLowerCase()))
      }
    default:
      console.log('fall through');
      return state;
  }
}