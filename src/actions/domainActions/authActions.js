import axios from "axios";
import config from "../../utils/headers";
import endpoints from '../../utils/endpoint';

export const SEND_AUTH_CREDENTIALS = 'SEND_AUTH_CREDENTIALS';
export const sendAuthCredentials = ({ email, password }) => {
  return dispatch => {
    dispatch(sendingAuthCredentials());
    const endpoint = endpoints.login;
    const data = {
      identifier: email,
      password: password
    }
    return axios
      .post(endpoint, data, config)
      .then(response => response.data)
      .then(json => {
        console.log(json)
        return dispatch(receiveAuthCredentials(json))
      })
      .catch(err => {
        console.log('failed', err);
        return dispatch(rejectAuthCredentials(err))
      })
  }
}

export const SENDING_AUTH_CREDENTIALS = 'SENDING_AUTH_CREDENTIALS';
export const sendingAuthCredentials = () => {
  return {
    type: SENDING_AUTH_CREDENTIALS,
    fetching: true
  }
}

export const RECEIVE_AUTH_CREDENTIALS = 'RECEIVE_AUTH_CREDENTIALS';
export const receiveAuthCredentials = (payload) => {
  const { jwt,  user} = payload;
  console.log(jwt,user);
  return {
    type: RECEIVE_AUTH_CREDENTIALS,
    isAuthed: true,
    fetching: false
  }
}
export const REJECT_AUTH_CREDENTIALS = 'REJECT_AUTH_CREDENTIALS';
export const rejectAuthCredentials = () => {
  return {
    type: REJECT_AUTH_CREDENTIALS,
    fetching: false
  }
}

export const IS_AUTHED = 'IS_AUTHED';
export const isAuthed = () => {
  return {
    type: IS_AUTHED,
    fetching: false
  }
}

