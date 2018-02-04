import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'

/*
* ========================================
* MULTIPLE RECIPES
* ========================================
*/

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
      .then(data=>dispatch(receiveRecipes(data)))
      .catch(err=>dispatch(rejectRecipes({ message: err.toString() })))
  }
}

/*
* ========================================
* SINGLE RECIPE
* ========================================
*/ 


export const REQUEST_SINGLE_RECIPE = 'REQUEST_SINGLE_RECIPE'
export function requestSingleRecipe(){
  console.log('requestSingleRecipe')
  return{
    type: REQUEST_SINGLE_RECIPE,
    fetching: true
  }
}

export const RECEIVE_SINGLE_RECIPE = 'RECEIVE_SINGLE_RECIPE'
export function receiveSingleRecipe(currentRecipe){
  // console.log(currentRecipe[0])
  return {
    type: RECEIVE_SINGLE_RECIPE,
    fetching: false,
    timeStamp: Date.now(),
    currentRecipe: currentRecipe
  }
}

export const REJECT_SINGLE_RECIPE = 'REJECT_SINGLE_RECIPE'
export function rejectSingleRecipe(err){
  return{
    type: REJECT_SINGLE_RECIPE,
    fetching: false,
    message: err    
  }
}

export const FETCH_SINGLE_RECIPE = 'FETCH_SINGLE_RECIPE'
export function fetchSingleRecipe(id){
  console.log('fetching single recipes')
  return dispatch => {
    dispatch(requestSingleRecipe())
    return axios.get(`${endpoint}/${id}`, config.headers)
      .then(response => response.data)
      .then(data => dispatch(receiveSingleRecipe(data)))
      .catch(err => dispatch(rejectSingleRecipe({ message: err.toString() })))
  }
}

/*
* ========================================
* MULTIPLE TAGS
* ========================================
*/ 


export const REQUEST_FETCH_TAGS = 'REQUEST_FETCH_TAGS'
export function requestFetchTags(){
  console.log('requestFetchTags')
  return{
    type: REQUEST_FETCH_TAGS,
    fetching: true
  }
}

export const RECEIVE_FETCH_TAGS = 'RECEIVE_FETCH_TAGS'
export function receiveFetchTags(recipes){
  return {
    type: RECEIVE_FETCH_TAGS,
    recipes: recipes.reverse(),
    fetching: false,
    timeStamp: Date.now()
  }
}

export const REJECT_FETCH_TAGS = 'REJECT_FETCH_TAGS'
export function rejectFetchTags(err){
  return{
    type: REJECT_FETCH_TAGS,
    fetching: false,
    message: err
  }
}

export const FETCH_TAGS = 'FETCH_TAGS'
export function fetchTags(){
  console.log('fetching recipes')
  return dispatch =>{
    dispatch(requestRecipes())

    return axios.get(endpoint, config.headers)
      .then(response => response.data)
      .then(data=>dispatch(receiveFetchTags(data)))
      .catch(err=>dispatch(rejectFetchTags({ message: err.toString() })))
  }
}