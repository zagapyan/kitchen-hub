// @flow
import { RECIPES } from '../actions/recipeActions';

export default function recipeReducer(state={}, action) {
  switch (action.type) {
    case RECIPES:
      return {};
    default:
      return state;
  }
}
