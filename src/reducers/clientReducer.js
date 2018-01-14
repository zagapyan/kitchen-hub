import {
  SET_STATUS,
  REMOVE_STATUS,
} from '../actions/clientActions';

const initalState={
  statusActive: false,
  statusType: '',
  statusText: ''
}

export default function statusReducer(state=initalState, action) {
  switch (action.type) {
    case SET_STATUS:
      /*
      warning: bool,
      statusText: String
      statusType: ['invalid','success','rejected']
      */
      console.log(action)
      return{
        ...state,
        statusActive: true,
        statusText: action.statusText,
        statusType: action.statusType
      }
    case REMOVE_STATUS:
      return{
        ...state,
        statusActive: action.warning,
        statusType: '',
        statusText: '',
      }
    default:
      return state;
  }
}