import { DEFAULT_VIEW, RECIPE_VIEW } from '../actions/mainViewActions';

const initalState={
}

export default function mainViewReducer(state=initalState, action) {
  switch(action.type){
    case DEFAULT_VIEW:
    case RECIPE_VIEW:
    default:
      console.log('fall through');
      return state;
  }
}
