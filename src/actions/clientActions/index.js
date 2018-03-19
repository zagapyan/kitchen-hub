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

export const PAGE_UP = "PAGE_UP";
export function pageUp(currentPage){
  return{
    type: PAGE_UP,
    currentPage
  }
}

export const PAGE_RESET = "PAGE_RESET";
export function pageReset(){
  return{
    type: PAGE_RESET
  }
}