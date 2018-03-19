import {
  // quest recipes
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  REJECT_RECIPES,
  FETCH_RECIPES,
  REQUEST_SINGLE_RECIPE,
  RECEIVE_SINGLE_RECIPE,
  REJECT_SINGLE_RECIPE,
  FETCH_SINGLE_RECIPE,

  // delete recipes
  REQUEST_DELETE_RECIPE,
  REJECT_DELETE_RECIPE,
  RECEIVE_DELETE_RECIPE,
  DELETE_RECIPE,
  
  // FILTER
  FILTER_RECIPE,
  FILTER_CLEAR,

  // SEND URL
  REQUEST_SEND_URL,
  SEND_URL_SUCCESS,
  SEND_URL_REJECTED,
  SEND_URL,

  // UPDATE RECIPES
  REQUEST_UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_REJECTED,
  UPDATE_RECIPE,

  // TAGS
  ASSIGN_TAGS,
  ADD_TAG,
  TOGGLE_ACTIVE,

  // NEXT ACTIONS
  TRIGGER_NEXT_ACTION,
  HOLD_NEXT_ACTION,
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
  fetching: false,
  triggerNextAction: false,
  filterPayload: '',
}

export default function recipeReducer(state=initalState, action) {
  switch (action.type) {
    /*
    * ========================================
    * FETCH MULTIPLE RECIPES
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
    * FETCH SINGLE RECIPE
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
    * SEND URL
    * ========================================
    */

   case REQUEST_SEND_URL:
   case SEND_URL_SUCCESS:
   case SEND_URL_REJECTED:
   case SEND_URL:
      return{
        ...state
      }

    /*
    * ========================================
    * UPDATING EXITING RECIPES
    * ========================================
    */
    case REQUEST_UPDATE_RECIPE:
      return{
        ...state,
        fetching: action.fetching,
      }
    case UPDATE_RECIPE_SUCCESS:
      return{
        ...state,
        fetching: action.fetching,
      }
    case UPDATE_RECIPE_REJECTED:
      return{
        ...state,
        fetching: action.fetching,
      }
    case UPDATE_RECIPE:
      return{
        ...state,
        fetching: action.fetching,
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
    
    case TOGGLE_ACTIVE:
      return{
        ...state,
        editableTags: action.editableTags
      }

    case ASSIGN_TAGS:
      return{
        ...state,
        editableTags: action.editableTags
      }

    /*
    * ========================================
    * NEXT ACTIONS
    * ========================================
    */
    case TRIGGER_NEXT_ACTION:
    case HOLD_NEXT_ACTION:
      return{
        ...state,
        triggerNextAction : action.triggerNextAction
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