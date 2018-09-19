import axios from 'axios';
import { endpoint, config } from '../utils';

/*
* ==========
* RECIPES
* ==========
*/

export const FETCH_TRANSIENT = 'FETCH_TRANSIENT';
export const fetchTransient = (payload) => {
  return {
    type: FETCH_TRANSIENT,
    isFetching: true,
    message: 'Fetching...'
  }
}

export const REQUEST_FETCH_RECIPES = 'REQUEST_FETCH_RECIPES';
export const requestFetchRecipes = () => dispatch => {
  dispatch(fetchTransient())
  return axios
    .get(endpoint.recipes, config)
    .then(response => response.data)
    .then(json => dispatch(fetchRecipesSuccess(json)))
    .catch(err => dispatch(fetchRecipesRejected({ message: err.toString() })));
}

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = (payload) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    isFetching: false,
    recipes: payload.recipes,
    message: 'Fetch Success!'
  }
}

export const FETCH_RECIPES_REJECTED = 'FETCH_RECIPES_REJECTED';
export const fetchRecipesRejected = ({ message }) => {
  return {
    type: FETCH_RECIPES_REJECTED,
    isFetching: false,
    recipes: [],
    message: message
  }
}

export const REQUEST_FETCH_SINGLE_RECIPE = 'REQUEST_FETCH_SINGLE_RECIPE';
export const requestFetchSingleRecipe = () => dispatch => {

  dispatch(fetchTransient())
  return axios
    .get(endpoint.recipes, config)
    .then(response => response.data)
    .then(json => dispatch(fetchSingleRecipeSuccess(json)))
    .catch(err => dispatch(fetchSingleRecipeSuccess({ message: err.toString() })));
}

export const FETCH_SINGLE_RECIPE_SUCCESS = 'FETCH_SINGLE_RECIPE_SUCCESS';
export const fetchSingleRecipeSuccess = (payload) => {
  return {
    type: FETCH_SINGLE_RECIPE_SUCCESS,
    isFetching: false,
    currentRecipe: payload.currentRecipe,
    message: 'Fetch Success!'
  }
}

export const FETCH_SINGLE_RECIPE_REJECTED = 'FETCH_SINGLE_RECIPE_REJECTED';
export const fetchSingleRecipeRejected = ({ message }) => {
  return {
    type: FETCH_SINGLE_RECIPE_REJECTED,
    isFetching: false,
    currentRecipe: {},
    message: message
  }
}

export const CLEAR_RECIPES = 'CLEAR_RECIPES';
export const clearRecipes = (payload) => {
  return {
    type: CLEAR_RECIPES,
    recipes: [],
    message: 'Recipes Cleared'
  }
}

export const CLEAR_CURRENT_RECIPE = 'CLEAR_CURRENT_RECIPE';
export const clearCurrentRecipe = (payload) => {
  return {
    type: CLEAR_CURRENT_RECIPE,
    currentRecipe: {},
    message: 'Recipe Cleared'
  }
}

/*
* ====================
* RECIPE LIST
* ====================
*/

export const REQUEST_FETCH_RECIPES_LIST = 'REQUEST_FETCH_RECIPES_LIST';
export const requestFetchRecipesList = () => dispatch => {
  dispatch(fetchTransient())
  return axios
    .get(endpoint.recipeList, config)
    .then(response => response.data)
    .then(json => dispatch(fetchRecipesSuccess(json)))
    .catch(err => dispatch(fetchRecipesRejected({ message: err.toString() })));
}

export const FETCH_RECIPE_LISTS_SUCCESS = 'FETCH_RECIPE_LISTS_SUCCESS';
export const fetchRecipesListSuccess = (payload) => {
  return {
    type: FETCH_RECIPE_LISTS_SUCCESS,
    isFetching: false,
    recipes: payload.recipes,
    message: 'Fetch Success!'
  }
}

export const FETCH_RECIPES_LIST_REJECTED = 'FETCH_RECIPES_LIST_REJECTED';
export const fetchRecipesListRejected = ({ message }) => {
  return {
    type: FETCH_RECIPES_LIST_REJECTED,
    isFetching: false,
    recipes: [],
    message: message
  }
}

/*
* ====================
* AUTHENTICATION
* ====================
*/

export const REQUEST_SEND_AUTH = 'REQUEST_SEND_AUTH';
export const requestSendAuth = payload => dispatch => {
  const data = {
    identifier: payload.identifier,
    password: payload.password
  }

  dispatch(authTransient());

  return axios.post(endpoint.login, { ...data }, config)
    .then(response => response.data)
    .then(json => {
      dispatch(authSuccess())
      dispatch(setToken(json))
    })
    .catch(err => {
      dispatch(authRejected({ message: err.toString() }))
      // dispatch(removeToken())
    })
}

export const AUTH_TRANSIENT = 'AUTH_TRANSIENT';
export const authTransient = (payload) => {
  return {
    type: AUTH_TRANSIENT,
    isFetching: true,
    message: 'Fetching...'
  }
}

export const AUTH_REJECTED = 'AUTH_REJECTED';
export const authRejected = ({ message }) => {
  // removeToken();
  return {
    type: AUTH_REJECTED,
    isAuthed: false,
    isFetching: false,
    message: message
  }
}

export const CHECK_AUTH_STATUS = 'CHECK_AUTH_STATUS';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (payload) => {
  console.log('authSuccess');
  return {
    type: AUTH_SUCCESS,
    isAuthed: true,
    isFetching: false,
    hasToken: true,
    message: 'Authentication Success!'
  }
}

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = ({ jwt }) => {
  if (!!jwt) {
    console.log('hasToken')
    localStorage.setItem('khtoken', jwt)
    return {
      type: SET_TOKEN,
      hasToken: true
    }
  }
  else {
    console.log('no token')
    return {
      type: SET_TOKEN,
      hasToken: false
    }
  }
}

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = () => {
  console.log('removing token');
  localStorage.removeItem('khtoken')
  return {
    type: REMOVE_TOKEN,
    hasToken: false
  }
}

export const CHECK_TOKEN = 'CHECK_TOKEN';
export const checkToken = () => dispatch => {
  console.log('checking token')
  if (!!localStorage.hasOwnProperty('khtoken')) {
    const token = localStorage.khtoken;
    const options = Object.assign({},
      config,
      {
        headers: Object.assign({},
          config.headers,
          { Authorization: `Bearer ${token}` })
      });

    return axios.get('http://localhost:1337/user', options)
      .then(response => response.data)
      .then(json => {
        const user = json[0]
        dispatch(authSuccess())
        dispatch(setToken({ jwt: token }))
        dispatch(setUser(user))
      })
      .catch(err => {
        console.log(err)
        dispatch(authRejected({ message: 'Incorrect Token' }))
        dispatch(setUser({}))
      });
  }
  else {
    dispatch(authRejected({ message: 'No Token' }))
  }
}

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  user: {
    ...user,
    _id: 'id_hidden',
    role: {
      ...user.role,
      _id: 'id_hidden'
    }
  }
})