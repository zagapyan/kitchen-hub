import {
  FETCH_RECIPES,
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  REJECTED_FETCH,
  CURRENT_RECIPE,
  REQUEST_DELETE_RECIPE,
  RECEIVE_DELETE_RECIPE,
  FETCH_DELETE_RECIPE,
  FETCH_SINGLE_RECIPE,
  REQUEST_SINGLE_RECIPE,
  RECEIVE_SINGLE_RECIPE,
  FILTER_RECIPE
} from '../actions/domainActions';

const initalState={
  currentRecipe: {},
  recipes: [],
  timeStamp: '',
  filtering: false,
  filterPayload: ''
}

export default function recipeReducer(state=initalState, action) {
  console.log('recipeReducer');
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
      };
    case REQUEST_RECIPES:
      // console.log('REQUEST_RECIPES')
      // console.log(action);
      return {
        ...state,
        recipes: action.recipes
      };
    case RECEIVE_RECIPES:
      // console.log('RECEIVE_RECIPES');
      // console.log(action);
      return{
        ...state,
        timeStamp: action.timeStamp,
        recipes: action.recipes
      }
    case REQUEST_DELETE_RECIPE:
      return{
        ...state,
      }
    case RECEIVE_DELETE_RECIPE:
      return{
        ...state
      }
    case FETCH_DELETE_RECIPE:
      return{
        ...state
      }
    case REQUEST_SINGLE_RECIPE:
      return{
        ...state,
      }
    case RECEIVE_SINGLE_RECIPE:
      return{
        ...state,
        id: action.id,
        title: action.title,
        description: action.description,
        imgSrc: action.imgSrc,
        timeStamp: action.timeStamp
      }
    case FETCH_SINGLE_RECIPE:
      return{
        ...state
      }
    case FILTER_RECIPE:
      return{
        ...state,
        filtering: action.filtering,
        filterPayload: action.filterPayload,
      }
    default:
      console.log('fall through');
      return state;
  }
}