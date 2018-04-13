import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'
import { holdNextAction, triggerNextAction } from "./nextActions";

export const REQUEST_DELETE_RECIPE = 'REQUEST_DELETE_RECIPE'
export function requestDeleteRecipe(){
  return{
    type: REQUEST_DELETE_RECIPE,
    fetching: true,
  }
}

export const RECEIVE_DELETE_RECIPE = 'RECEIVE_DELETE_RECIPE'
export function receiveDeleteRecipe(deletedRecipe){
  return dispatch => {
    dispatch(triggerNextAction())
    return{
      type: RECEIVE_DELETE_RECIPE,
      fetching: false
    }
  }
}

export const REJECT_DELETE_RECIPE = 'REJECT_DELETE_RECIPE'
export function rejectDeleteRecipe(err){
  return dispatch => {
    dispatch(triggerNextAction())
    return{
      type: REJECT_DELETE_RECIPE,
      fetching: false,
      message: err
    }
  }
}

export const DELETE_RECIPE = 'DELETE_RECIPE'
export function deleteRecipe(id){
  let deleteEndPoint = `${endpoint}/${id}`
  return dispatch => {
    dispatch(requestDeleteRecipe())
    dispatch(holdNextAction())
    return axios.delete(deleteEndPoint, config.headers)
      .then(response => response.data)
      .then(json => dispatch(receiveDeleteRecipe(json)))
      .catch(err => dispatch(rejectDeleteRecipe({ message: err.toString() })))
  }
}