import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'

export const REQUEST_DELETE_RECIPE = 'REQUEST_DELETE_RECIPE'
export function requestDeleteRecipe(){
  console.log('requestDeleteRecipe')
  return{
    type: REQUEST_DELETE_RECIPE,
    fetching: true,
  }
}

export const RECEIVE_DELETE_RECIPE = 'RECEIVE_DELETE_RECIPE'
export function receiveDeleteRecipe(deletedRecipe){
  console.log('recipe deleted:', deletedRecipe)
  return{
    type: RECEIVE_DELETE_RECIPE,
    fetching: false
  }
}

export const REJECT_DELETE_RECIPE = 'REJECT_DELETE_RECIPE'
export function rejectDeleteRecipe(err){
  return{
    type: REJECT_DELETE_RECIPE,
    fetching: false,
    message: err
  }
}

export const HANDLE_DELETE_RECIPE = 'HANDLE_DELETE_RECIPE'
export function handleDeleteRecipe(id){
  console.log(id)
  let deleteEndPoint = `${endpoint}/${id}`
  return dispatch => {
    dispatch(requestDeleteRecipe())
    return axios.delete(deleteEndPoint, config.headers)
      .then(response => response.data)
      .then(json => dispatch(receiveDeleteRecipe(json)))
      .catch(err => dispatch(rejectDeleteRecipe({ message: err.toString() })))
  }
}