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
export function fetchRecipes(recipes){
  return dispatch =>{
    dispatch(requestRecipes(recipes));
    return axios.get(endpoint, config.headers)
      .then(response => response.data)
      .then(json=>dispatch(receiveRecipes(json)))
      .catch(err=>err)
  }
}

export const REQUEST_SINGLE_RECIPE = 'REQUEST_SINGLE_RECIPE'
export function requestSingleRecipe(recipe){
  return{
    type: REQUEST_SINGLE_RECIPE,
  }
}

export const RECEIVE_SINGLE_RECIPE = 'RECEIVE_SINGLE_RECIPE'
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

export const FETCH_SINGLE_RECIPE = 'FETCH_SINGLE_RECIPE'
export function fetchSingleRecipe(id){
  return dispatch =>{
    dispatch(requestSingleRecipe())
    return axios.get(`${endpoint}/${id}`, config.headers)
      .then(response => response.data)
      .then(json=>dispatch(RECEIVESingleRecipe(json[0])))
      .catch(err=>err)
  }
}

export const REQUEST_DELETE_RECIPE = 'REQUEST_DELETE_RECIPE'
export function requestDeleteRecipe(){
  return{
    type: REQUEST_DELETE_RECIPE,
  }
}

export const RECEIVE_DELETE_RECIPE = 'RECEIVE_DELETE_RECIPE'
export function receiveDeleteRecipe(){
  return{
    type: RECEIVE_DELETE_RECIPE,
  }
}

export const FETCH_DELETE_RECIPE = 'DELETE_RECIPE'
export function fetchDeleteRecipe(id){
  let deleteEndPoint = `${endpoint}/${id}`
  console.log(deleteEndPoint)
  return dispatch =>{
    dispatch(requestDeleteRecipe());
    return axios
      .get(deleteEndPoint,{...config.headers, method: 'DELETE' })
      .then(response => response.data)
      .then(json=>{
        dispatch(receiveDeleteRecipe(json))
        dispatch(fetchRecipes(endpoint))
      })
      .catch(err=>err)
  }
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

export const SEND_URL = 'SEND_URL';
export function sendURL(url){
  console.log(endpoint, url, config);
  axios.post(endpoint, {url: url}, config)
    .then(response=>{
        return dispatch => dispatch(sendURLSuccess({
            message: response.data.message,
          })
        )
    })
    .catch(err=>{
      return dispatch => dispatch(sendURLRejected({
          message: err.toString(),
        })
      )
    })
}

export const SEND_URL_SUCCESS = 'SEND_URL_SUCCESS';
export function sendURLSuccess(payload){
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