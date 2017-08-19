import type { recipes } from '../reducers/';

export const GET_RECIPES = 'GET_RECIPES';
export const RECIEVE_RECIPES = 'RECIEVE_RECIPES';

export function fetchRecipes(recipes) {
  return {
    type: GET_RECIPES,
    recipes
  };
}

export function receiveRecipes(recipes, json){
  return{
    type: RECIEVE_RECIPES,
    recipes,
    data: json.data,
    receivedDate: Date.now()
  }
}