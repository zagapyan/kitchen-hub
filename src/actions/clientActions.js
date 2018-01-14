
/*
* ==========
* ACTIONS
* ==========
*/

// pure functions
export const SET_STATUS = 'SET_STATUS'
export function setStatus({statusText,statusType}){
  console.log({statusText,statusType})
  return{
    type: SET_STATUS,
    statusText,
    statusType
  }
}

export const REMOVE_STATUS = 'REMOVE_STATUS'
export function removeStatus(){
  return{
    type: REMOVE_STATUS,
  }
}