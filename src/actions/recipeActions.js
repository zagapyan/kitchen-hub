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

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export function receiveRecipes(response){
  console.log('recieving recipes');
  console.log(response);
  return {
    type: RECEIVE_RECIPES,
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

export const REQUEST_SINGLE_RECIPE = 'REQUEST_SINGLE_RECIPE';
export function requestSingleRecipe(recipe){
  console.log('requestSingleRecipe');
  console.log(recipe);
  return{
    type: REQUEST_SINGLE_RECIPE,
    
  }
}

export const RECEIVE_SINGLE_RECIPE = 'RECEIVE_SINGLE_RECIPE';
export function RECEIVESingleRecipe(response){
  return {
    type: RECEIVE_SINGLE_RECIPE,
    id: response._id,
    title: response.title,
    description: response.description,
    imgSrc: response.imgSrc,
    timeStamp: Date.now()
  }
}

export const FETCH_SINGLE_RECIPE = 'FETCH_SINGLE_RECIPE';
export function fetchSingleRecipe(id){
  return dispatch =>{
    dispatch(requestSingleRecipe())
    return fetch(`${endpoint}/${id}`, config.headers).then(
        response=>response.json(),
        err => err
      ).then(json=>dispatch(RECEIVESingleRecipe(json[0])))
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