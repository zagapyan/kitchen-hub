import {
  FETCH_RECIPES,
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  REJECTED_FETCH,
  DELETE_RECIPE,
  RECEIVE_DELETE_RECIPE,
  REJECT_DELETE_RECIPE,
  REQUEST_SINGLE_RECIPE,
  RECEIVE_SINGLE_RECIPE,
  REJECT_SINGLE_RECIPE,
  FETCH_SINGLE_RECIPE,
  FILTER_RECIPE,
  FILTER_CLEAR,
  ADD_TAG
} from '../actions/domainActions';


/*
* ========================================
* DEFAULT STATE
* ========================================
*/

const initalState={
  currentRecipe: {
    title: '',
    description: '',
    imgSrc: '',
    tags: []
  },
  recipes: [],
  filteredRecipes: [],
  timeStamp: '',
  filtering: false,
  filterPayload: ''
}

export default function recipeReducer(state=initalState, action) {
  switch (action.type) {
    /*
    * ========================================
    * MULTIPLE RECIPES
    * ========================================
    */
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
    case DELETE_RECIPE:
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


    /*
    * ========================================
    * SINGLE RECIPE
    * ========================================
    */ 
    case REQUEST_SINGLE_RECIPE:
      return{
        ...state
      }
    case RECEIVE_SINGLE_RECIPE:
      return{
        ...state,
        timeStamp: action.timeStamp,
        currentRecipe: action.currentRecipe[0]
      }
    case REJECT_SINGLE_RECIPE:
      return{
        ...state
      }
    case FETCH_SINGLE_RECIPE:
      return{
        ...state
      }


    /*
    * ========================================
    * FILTERING RECIPE FROM MULTIPLE RECIPES
    * ========================================
    */
    case FILTER_RECIPE:
      return{
        ...state,
        filtering: action.filtering,
        filteredRecipes: state.recipes.filter(o=>
          o.title
            .toLowerCase()
            .includes(action.filterPayload.toLowerCase()))
      }
    case FILTER_CLEAR:
      return{
        ...state,
        filtering: action.filtering,
        filtering: false,
        filteredRecipes: state.recipes.filter(o=>
          o.title
            .toLowerCase()
            .includes(action.filterPayload.toLowerCase()))
      }

    /*
    * ========================================
    * TAGS
    * ========================================
    */
    case ADD_TAG:
      return{
        ...state,
        editableTags: action.editableTags
      }

    /*
    * ========================================
    * FALL THROUGH
    * ========================================
    */
    default:
      return state;
  }
}