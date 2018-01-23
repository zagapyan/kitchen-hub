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
    recipes: recipes,
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