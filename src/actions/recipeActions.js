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
    dispatch(requestRecipes(recipes));
    
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

export const CURRENT_RECIPE = 'CURRENT_RECIPE';
export function filterCurrentRecipe(id, recipes){
  return{
    type: CURRENT_RECIPE,
    currentRecipe: recipes.filter(data=>data._id===id)[0]
  }
}

export const REQUEST_DELETE_RECIPE = 'REQUEST_DELETE_RECIPE';
export function requestDeleteRecipe(){
  return{
    type: REQUEST_DELETE_RECIPE,
  }
}

export const RECEIVE_DELETE_RECIPE = 'RECEIVE_DELETE_RECIPE';
export function receiveDeleteRecipe(){
  return{
    type: RECEIVE_DELETE_RECIPE,
  }
}

export const FETCH_DELETE_RECIPE = 'DELETE_RECIPE';
export function fetchDeleteRecipe(id){
  let body = {
    id
  }
  console.log(body)
  return dispatch =>{
    dispatch(requestDeleteRecipe());
    let deleteEndPoint = `${endpoint}/${id}`;
    console.log(deleteEndPoint);
    return fetch(deleteEndPoint,{...config.headers, method: 'DELETE' }).then(
      response => {
        console.log(response);
        return response.json()
      },
      err => {
        return console.log(err)
      }
    ).then(json=>{
      console.log(json);
      dispatch(receiveDeleteRecipe(json))
      dispatch(fetchRecipes(endpoint))
    })
  }
}