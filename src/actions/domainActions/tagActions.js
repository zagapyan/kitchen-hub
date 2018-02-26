export const ADD_TAG = 'ADD_TAG'
export function addTag(tag, tags){
  console.log('addTags action')
  return{
    type: ADD_TAG,
    currentTags: tags.push(tag)
  }
}
export const ASSIGN_TAGS = 'ASSIGN_TAGS'
export function assignTags(tags){
  return{
    type: ASSIGN_TAGS,
    currentTags: tags || []
  }
}