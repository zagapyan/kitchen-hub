import axios from 'axios';
import config from '../utils/headers';
import fetch from 'isomorphic-fetch';
import endpoint from '../utils/endpoint'

// pure functions
export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export function requestRecipes(recipes){
  console.log('requestRecipes');
  return{
    type: REQUEST_RECIPES,
    recipes: recipes.recipes
  }
}

export const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
export function receiveRecipes(response){
  console.log('recieving recipes');
  console.log(response);
  return {
    type: RECIEVE_RECIPES,
    recipes: response,
    timeStamp: Date.now()
  }
}

export const FETCH_RECIPES = 'FETCH_RECIPES';
export function fetchRecipes(recipes){
  return dispatch =>{
    dispatch(requestRecipes(recipes))
    
    return fetch(endpoint, config.headers).then(
        response => response.json(),
        err => console.log(err)
      ).then(json=>dispatch(receiveRecipes(json)))
  }
}

export const REJECTED_FETCH = 'REJECTED_FETCH';
export function rejectedFetchRecipes(error){
  return{
    type: REJECTED_FETCH,
    error,
    timeStamp: Date.now()
  }
}