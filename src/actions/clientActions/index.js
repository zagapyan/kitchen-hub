/*
* ==========
* ACTIONS
* ==========
*/

// pure functions
export const SET_STATUS = "SET_STATUS";
export function setStatus({ statusText, statusShow, statusClass }) {
  return {
    type: SET_STATUS,
    statusText,
    statusClass
  };
}

export const REMOVE_STATUS = "REMOVE_STATUS";
export function removeStatus() {
  return {
    type: REMOVE_STATUS,
    statusClass: ""
  };
}

export const LOCK_FETCH = "LOCK_FETCH";
export function lockFetch(){
  return{
    type: LOCK_FETCH
  }
}

export const RELEASE_LOCK_FETCH = "RELEASE_LOCK_FETCH";
export function releaseLockFetch(){
  return{
    type: RELEASE_LOCK_FETCH
  }
}

export const PAGE_CHANGE = "PAGE_CHANGE";
export function pageChange({page}){
  return{
    type: PAGE_CHANGE,
    page
  }
}

export const PAGE_RESET = "PAGE_RESET";
export function pageReset(){
  return{
    type: PAGE_RESET
  }
}

export const TOGGLE_LIST_STYLE = 'TOGGLE_LIST_STYLE'
export function toggleListStyle(){
  return{
    type: TOGGLE_LIST_STYLE
  }
}