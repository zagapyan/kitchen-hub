export const DEFAULT_VIEW = 'DEFAULT_VIEW';
export function renderDefaultView(){
  return{
    type: DEFAULT_VIEW
  }
}

export const RECIPE_VIEW = 'RECIPE_VIEW';
export function renderRecipeView(id){
  return{
    type: RECIPE_VIEW
  }
}