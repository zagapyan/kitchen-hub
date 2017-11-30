/*
* ==========
* ACTIONS
* ==========
*/

export const FETCH_FEEDS = 'FETCH_FEEDS';
export function fetchFeeds(endpoint, name){
  return dispatch =>{
    dispatch(requestFeeds(name));
    let rssToJSONEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${endpoint}`;
    
    return fetch(rssToJSONEndpoint).then(
        response => response.json(),
        err => dispatch(rejectFeeds(err,name))
      )
      .then(json=>{
        return dispatch(receiveFeeds(json.items, name))
      })
  }
}

export const REQUEST_FEEDS = 'REQUEST_FEEDS';
export function requestFeeds(name){
  return{
    type: REQUEST_FEEDS,
    name,
    [`${name}IsFetching`]: true,
    [`${name}IsRejected`]: false,
  }
}


export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';

export function receiveFeeds(items, name){
  // sending dynamic keyhash variables to dispatch actions to reducers
  return{
    type: `RECEIVE_FEEDS`,
    name,
    [`${name}IsFetching`]: false,
    [`${name}IsRejected`]: false,
    [`${name}Items`]: items
  }
}

export const REJECT_FEEDS = 'REJECT_FEEDS';
export function rejectFeeds(err, name){
  return{
    type: REJECT_FEEDS,
    [`${name}IsFetching`]: false,
    [`${name}IsRejected`]: true,
    [`${name}Items`]: [],
    errorMessage: err
  }
}