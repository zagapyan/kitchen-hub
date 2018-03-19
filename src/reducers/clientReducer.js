import {
  SET_STATUS,
  REMOVE_STATUS,
  PAGE_UP,
  PAGE_RESET
} from '../actions/clientActions';

const initalState={
  statusShow: false,
  statusType: '',
  statusClass: '',
  statusText: '',
  page: 0
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
    case PAGE_UP:
      return{
        ...state,
        page: action.page++,
      }
    case PAGE_RESET:
      return{
        ...state,
        page: 0
      }
    default:
      return state;
  }
}