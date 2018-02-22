import { receiveDeleteRecipe } from ".";

/*
* ========================================
* FILTER SINGLE RECIPE FROM LIST
* ========================================
*/

export const FILTER_SINGLE_RECIPE_FROM_LIST = 'FILTER_SINGLE_RECIPE_FROM_LIST'
export function filterSingleRecipeFromList(list, recipeID){
  console.log(list)
  console.log(recipeID)
  return{
    type: FILTER_SINGLE_RECIPE_FROM_LIST,
  }
}