import type { recipes } from '../reducers/';
import axios from 'axios';
import config from '../utils/headers';

console.log(config)

export const GET_RECIPES = 'GET_RECIPES';
export const RECIEVE_RECIPES = 'RECIEVE_RECIPES';
export const REJECTED_FETCH = 'REJECTED_FETCH';

export function fetchRecipes(url) {
  axios.get(url, config.headers).then(data=>console.log(data))
  return {
    type: GET_RECIPES,
    isFetching: true,
    recievedData: false
  };
}

export function receiveRecipes(recipes, json){
  return{
    type: RECIEVE_RECIPES,
    isFetching: false,
    recievedData: true,
    recipes,
    data: json.data,
    receivedDate: Date.now()
  }
}

export function rejectedFetchRecipes(error){
  return{
    type: REJECTED_FETCH,
    isFetching: false,
    receivedData: false,
    error,
    receivedDate: Date.now()
  }
}