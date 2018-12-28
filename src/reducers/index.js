import {combineReducers} from 'redux'
import {
  FETCH_TRANSIENT,
  REQUEST_FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_REJECTED,
  REQUEST_FETCH_SINGLE_RECIPE,
  FETCH_SINGLE_RECIPE_SUCCESS,
  FETCH_SINGLE_RECIPE_REJECTED,
  CLEAR_RECIPES,
  CLEAR_CURRENT_RECIPE,
  AUTH_TRANSIENT,
  AUTH_REJECTED,
  AUTH_SUCCESS,
  SET_TOKEN,
  REMOVE_TOKEN,
  CHECK_TOKEN,
  SET_USER
} from '../actions'

const defaultRecipeState = {
  recipeLists: [],
  currentList: [],
  recipes: [],
  currentRecipe: {},
  user: {}
}

const recipesReducer = (state=defaultRecipeState, action)=>{
  switch(action.type){
    case FETCH_TRANSIENT:
      return{
        ...state,
        message: action.message,
        isFetching: action.isFetching
      }
    case FETCH_RECIPES_SUCCESS:
    case FETCH_RECIPES_REJECTED:
      return{
        ...state,
        message: action.message,
        isFetching: action.isFetching,
        recipes: action.recipes
      }
    case FETCH_SINGLE_RECIPE_SUCCESS:
    case FETCH_SINGLE_RECIPE_REJECTED:
      return{
        ...state,
        message: action.message,
        isFetching: action.isFetching,
        currentRecipe: action.currentRecipe,
      }
    case CLEAR_RECIPES:
      return{
        ...state,
        message: action.message,
        recipes: action.recipes
      }
    case CLEAR_CURRENT_RECIPE:
      return{
        ...state,
        message: action.message,
        currentRecipe: action.currentRecipe
      }
    default: 
      return state;
  }
}

const defaultAuthState = {
  isAuthed: false,
  isFetching: false,
  message: '',
}

export const authenticationReducer = (state=defaultAuthState, action)=>{
  switch(action.type){
    case AUTH_TRANSIENT:
      return{
        ...state,
        message: action.message,
        isFetching: action.isFetching
      }
    case AUTH_REJECTED:
    case AUTH_SUCCESS:
      return{
        ...state,
        message: action.message,
        isAuthed: action.isAuthed,
        isFetching: action.isFetching
      };
    case SET_USER: 
      return{
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

const tokenState = {
  hasToken: false
}
export const tokenReducer = (state=tokenState, action)=>{
  switch(action.type){
    case CHECK_TOKEN:
    case SET_TOKEN:
    case REMOVE_TOKEN:
      console.log('REMOVE_TOKEN_REDUCER')
      return{
        ...state,
        hasToken: action.hasToken,
        recipeLists: action.recipeLists,
        currentList: action.currentList,
        recipes: action.recipes,
        currentRecipe: action.currentRecipe,
        user: action.user,
        isAuthed: action.isAuthed,
        isFetching: action.isFetching,
        message: action.message,
        hasToken: action.hasToken
      }
    default:
      return{
        ...state
      }
  }
}

export const rootReducer = combineReducers({
  authenticationReducer,
  recipesReducer,
  tokenReducer
})