
/*
* ==========
* ACTIONS
* ==========
*/

// pure functions
export const SET_STATUS = 'SET_STATUS'
export function setStatus({statusText,statusShow, statusClass}){
  console.log('setStatus', {statusText,statusShow, statusClass})
  return{
    type: SET_STATUS,
    statusText,
    statusClass,
  }
}

export const REMOVE_STATUS = 'REMOVE_STATUS'
export function removeStatus(){
  return{
    type: REMOVE_STATUS,
    statusClass: '',
  }
}

export const TOGGLE_LIST_STYLE = 'TOGGLE_LIST_STYLE'
export function toggleListStyle(){
  return{
    type: TOGGLE_LIST_STYLE
  }
}