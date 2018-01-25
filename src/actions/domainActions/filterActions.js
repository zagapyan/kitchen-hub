export const FILTER_RECIPE = 'FILTER_RECIPE'
export function filterRecipe(title){
  if(title.length>0){
    return{
      type: FILTER_RECIPE,
      filtering: true,
      filterPayload: title,
    }
  }
  else{
    return{
      type: FILTER_RECIPE,
      filtering: false,
      filterPayload: '',
      filteredList : [],
    }
  }
}

export const FILTER_CLEAR = 'FILTER_CLEAR'
export function filterClear(){
  return{
    type: FILTER_CLEAR,
    filtering: false,
    filterPayload: '',
    filteredList: []
  }
}