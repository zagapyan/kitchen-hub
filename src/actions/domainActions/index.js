import axios from 'axios'
import endpoint from '../../utils/endpoint'
import config from '../../utils/headers'

/* 
* IMPORT ACTIONS
*/

import {
  REQUEST_RECIPES,
  requestRecipes,
  RECEIVE_RECIPES,
  receiveRecipes,
  REJECT_RECIPES,
  rejectRecipes,
  FETCH_RECIPES,
  fetchRecipes
} from './fetchActions'

import {
  REQUEST_DELETE_RECIPE,
  requestDeleteRecipe,
  REJECT_DELETE_RECIPE,
  rejectDeleteRecipe,
  RECEIVE_DELETE_RECIPE,
  receiveDeleteRecipe,
  HANDLE_DELETE_RECIPE,
  handleDeleteRecipe
} from './deleteActions'

import {
  FILTER_RECIPE,
  filterRecipe
} from './filterActions'


import {
  REQUEST_SEND_URL,
  requestSendURL,
  SEND_URL_SUCCESS,
  sendURLSuccess,
  SEND_URL_REJECTED,
  sendURLRejected,
  SEND_URL,
  sendURL
} from './sendURLAction'



/* 
* EXPORT ACTIONS
*/
export {
  // request recipes
  REQUEST_RECIPES,
  requestRecipes,
  RECEIVE_RECIPES,
  receiveRecipes,
  REJECT_RECIPES,
  rejectRecipes,
  FETCH_RECIPES,
  fetchRecipes,

  // delete recipes
  REQUEST_DELETE_RECIPE,
  requestDeleteRecipe,
  REJECT_DELETE_RECIPE,
  rejectDeleteRecipe,
  RECEIVE_DELETE_RECIPE,
  receiveDeleteRecipe,
  HANDLE_DELETE_RECIPE,
  handleDeleteRecipe,
  
  // FILTER
  FILTER_RECIPE,
  filterRecipe,

  // SEND URL
  REQUEST_SEND_URL,
  requestSendURL,
  SEND_URL_SUCCESS,
  sendURLSuccess,
  SEND_URL_REJECTED,
  sendURLRejected,
  SEND_URL,
  sendURL
}

