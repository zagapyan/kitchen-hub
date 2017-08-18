import type { recipes } from '../reducers/';

export const RECIPES = 'RECIPES';

export default function recipeActions() {
  return {
    type: RECIPES
  };
}