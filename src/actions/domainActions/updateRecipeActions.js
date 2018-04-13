import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'
import { fetchSingleRecipe } from './fetchActions'
import { holdNextAction, triggerNextAction } from './nextActions'

export const REQUEST_UPDATE_RECIPE = 'REQUEST_UPDATE_RECIPE'
export function requestUpdateRecipe(){
  return dispatch => {
    dispatch(holdNextAction())
    return{
      type: REQUEST_UPDATE_RECIPE,
      fetching: true,
    }
  }
}

export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export function updateRecipeSuccess(payload){
  return dispatch => {
    dispatch(triggerNextAction())
    return{
      type: UPDATE_RECIPE_SUCCESS,
      fetching: false,
    }
  }
}

export const UPDATE_RECIPE_REJECTED = 'UPDATE_RECIPE_REJECTED';
export function updateRecipeRejected(payload){
  dispatch => {
    dispatch(triggerNextAction())
    return{
      type: UPDATE_RECIPE_REJECTED,
      fetching: false,
    } 
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