import config from '../utils/headers'
import axios from 'axios'
import endpoint from '../utils/endpoint'

/*
* ==========
* ACTIONS
* ==========
*/

// pure functions
export const REQUEST_RECIPES = 'REQUEST_RECIPES'
export function requestRecipes(response){
  return{
    type: REQUEST_RECIPES,
  }
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export function receiveRecipes(recipes){
  return {
    type: RECEIVE_RECIPES,
    recipes: recipes,
    timeStamp: Date.now()
  }
}

export const FETCH_RECIPES = 'FETCH_RECIPES'
export function fetchRecipes(){
  console.log('fetching recipes')
  return dispatch =>{
    dispatch(requestRecipes());
    return axios.get(endpoint, config.headers)
      .then(response => response.data)
      .then(json=>dispatch(receiveRecipes(json)))
      .catch(err=>err)
  }
}

export const REJECT_DELETE_RECIPE = 'REJECT_DELETE_RECIPE'
export function rejectDeleteRecipe(err){
  return{
    type: REJECT_DELETE_RECIPE,
    message: err
  }
}

export const RECEIVE_DELETE_RECIPE = 'RECEIVE_DELETE_RECIPE'
export function receiveDeleteRecipe(deletedRecipe){
  console.log('recipe deleted:', deletedRecipe)
  return{
    type: RECEIVE_DELETE_RECIPE,
  }
}

export const HANDLE_DELETE_RECIPE = 'HANDLE_DELETE_RECIPE'
export function handleDeleteRecipe(id){
  let deleteEndPoint = `${endpoint}/${id}`
  axios.delete(deleteEndPoint, config.headers)
    .then(response=>response.data)
    .then(data=>{
        let  deletedRecipe = data
        dispatch=>dispatch(receiveDeleteRecipe(deletedRecipe))
      })
    .catch(err=>rejectDeleteRecipe(err))
}

export const FILTER_RECIPE = 'FILTER_RECIPE'
export function filterRecipe(title){
  if(title.length>0){
    return{
      type: FILTER_RECIPE,
      filtering: true,
      filterPayload: title,
    }
  }
  else{
    return{
      type: FILTER_RECIPE,
      filtering: false,
      filterPayload: '',
      filteredList : [],
    }
  }
}

export const REQUEST_SEND_URL = 'REQUEST_SEND_URL'
export function requestSendURL(){
  console.log('requestSendRecipes')
  return{
    type: REQUEST_SEND_URL
  }
}

export const SEND_URL_SUCCESS = 'SEND_URL_SUCCESS';
export function sendURLSuccess(payload){
  console.log('sendURLSuccess',payload)
  return{
    type: SEND_URL_SUCCESS,
    messageClass: 'success',
    message: payload.message
  }
}

export const SEND_URL_REJECTED = 'SEND_URL_REJECTED';
export function sendURLRejected(payload){
  return{
    type: SEND_URL_REJECTED,
    messageClass: 'error',
    message: payload.message
  } 
}

export const SEND_URL = 'SEND_URL';
export function sendURL(url){
  console.log('sendURL')
  return dispatch =>{
    dispatch(requestSendURL())
    axios.post(endpoint, {url: url}, config)
      .then(response => response.data)
      .then(json => dispatch(sendURLSuccess(json)))
      .catch(err => dispatch(sendURLRejected({message: err.toString()})))
    }
}