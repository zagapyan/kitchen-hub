import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'
import { fetchSingleRecipe } from './fetchActions'

export const REQUEST_UPDATE_RECIPE = 'REQUEST_UPDATE_RECIPE'
export function requestUpdateRecipe(){
  console.log('requestSendRecipes')
  return{
    type: REQUEST_UPDATE_RECIPE,
    fetching: true,
    updateComplete: false,
  }
}

export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export function updateRecipeSuccess(payload){
  console.log('updateRecipeSuccess',payload)
  return{
    type: UPDATE_RECIPE_SUCCESS,
    fetching: false,
    updateComplete: true,
  }
}

export const UPDATE_RECIPE_REJECTED = 'UPDATE_RECIPE_REJECTED';
export function updateRecipeRejected(payload){
  return{
    type: UPDATE_RECIPE_REJECTED,
    fetching: false,
    updateComplete: true,
  } 
}

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export function updateRecipe(payload){
  const recipeEndpoint = `${endpoint}/${payload.id}`
  return dispatch =>{
    dispatch(requestUpdateRecipe())
    axios.put(recipeEndpoint, {...payload, tags: payload.tags.filter(obj=>obj.active).map(obj=>obj.value) }, config)
      .then(response => response.data)
      .then(json => dispatch(updateRecipeSuccess(json)))
      .catch(err => dispatch(updateRecipeRejected({message: err.toString()})))
    }
}