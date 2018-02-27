export const ADD_TAG = "ADD_TAG";
export function addTag(tag, tags) {
  return {
    type: ADD_TAG,
    editableTags: [...tags, tag]
  };
}

export const ASSIGN_TAGS = "ASSIGN_TAGS";
export function assignTags(tags) {
  return {
    type: ASSIGN_TAGS,
    editableTags:
      tags.map(tag => Object.assign({}, { ...tag, active: true })) || []
  };
}
