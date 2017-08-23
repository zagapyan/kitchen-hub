import type { recipes } from '../reducers/';
import axios from 'axios';
import config from '../utils/headers';

console.log(config)

export const GET_RECIPES = 'GET_RECIPES';
export const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
export const REJECTED_FETCH = 'REJECTED_FETCH';

export function fetchRecipes(url) {
  axios.get(url, config.headers).then(response=>{
    if(response.status === 200){
      receiveRecipes(response.data)
    }
  })
  .catch(err=>console.log(err));
}

export function receiveRecipes(recipes){
  return{
    type: RECIEVE_RECIPES,
    recipes,
    timeStamp: Date.now()
  }
}

export function rejectedFetchRecipes(error){
  return{
    type: REJECTED_FETCH,
    error,
    timeStamp: Date.now()
  }
}