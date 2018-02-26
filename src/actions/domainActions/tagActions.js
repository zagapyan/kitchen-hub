export const ADD_TAG = 'ADD_TAG'
export function addTag(tag, tags){
  console.log('addTags action')
  return{
    type: ADD_TAG,
    tags: tags.push(tag)
  }
}