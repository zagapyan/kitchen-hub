import {
  SET_STATUS,
  REMOVE_STATUS,
  TOGGLE_LIST_STYLE,
} from '../actions/clientActions';

const initalState={
  statusShow: false,
  statusType: '',
  statusClass: '',
  statusText: '',
  isListStyle : false
}

export default function statusReducer(state=initalState, action) {
  switch (action.type) {
    case SET_STATUS:
      console.log(action)
      return{
        ...state,
        statusShow: true,
        statusText: action.statusText,
        statusClass: action.statusClass
      }
    case REMOVE_STATUS:
      return{
        ...state,
        statusShow: false,
        statusClass: '',
        statusText: '',
      }
    case TOGGLE_LIST_STYLE:
      return{
        ...state,
        isListStyle: !state.isListStyle
      }
    default:
      return state;
  }
}