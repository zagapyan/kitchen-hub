import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'

export const REQUEST_RECIPES = 'REQUEST_RECIPES'
export function requestRecipes(){
  console.log('requestRecipes')
  return{
    type: REQUEST_RECIPES,
    fetching: true
  }
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export function receiveRecipes(recipes){
  return {
    type: RECEIVE_RECIPES,
    recipes: recipes.reverse(),
    fetching: false,
    timeStamp: Date.now()
  }
}

export const REJECT_RECIPES = 'REJECT_RECIPES'
export function rejectRecipes(err){
  return{
    type: REJECT_RECIPES,
    fetching: false,
    message: err
  }
}

export const FETCH_RECIPES = 'FETCH_RECIPES'
export function fetchRecipes(){
  console.log('fetching recipes')
  return dispatch =>{
    dispatch(requestRecipes())
    
    return axios.get(endpoint, config.headers)
      .then(response => response.data)
      .then(json=>dispatch(receiveRecipes(json)))
      .catch(err=>dispatch(rejectRecipes({ message: err.toString() })))
  }
}

export const REQUEST_SINGLE_RECIPE = 'REQUEST_SINGLE_RECIPE'
export function requestSingleRecipe(){
  console.log('requestSingleRecipe')
  return{
    type: REQUEST_SINGLE_RECIPE,
  }
}

export const RECEIVE_SINGLE_RECIPE = 'RECEIVE_SINGLE_RECIPE'
export function receiveSingleRecipe(recipes){
  return {
    type: RECEIVE_SINGLE_RECIPE,
  }
}

export const REJECT_SINGLE_RECIPE = 'REJECT_SINGLE_RECIPE'
export function rejectSingleRecipe(err){
  return{
    type: REJECT_SINGLE_RECIPE,
  }
}

export const FETCH_SINGLE_RECIPE = 'FETCH_SINGLE_RECIPE'
export function fetchSingleRecipe(){
  console.log('fetching single recipes')
  return dispatch =>{
    dispatch(requestSingleRecipe())
    return{

    }
  }
}