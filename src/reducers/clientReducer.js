import {
  SET_STATUS,
  REMOVE_STATUS,
  TOGGLE_LIST_STYLE,
  PAGE_CHANGE,
  PAGE_RESET
} from '../actions/clientActions';

const initalState={
  statusShow: false,
  statusType: '',
  statusClass: '',
  statusText: '',
  isListStyle : false,
  isFetchLocked: false,
  page: 1,
}

export default function statusReducer(state=initalState, action) {
  switch (action.type) {
    case SET_STATUS:
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
    case PAGE_CHANGE:
      return{
        ...state,
        page: action.page,
      }
    case PAGE_RESET:
      return{
        ...state,
        page: 1,
      }
    default:
      return state;
  }
}