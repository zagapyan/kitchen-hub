export const ADD_TAG = "ADD_TAG";
export function addTag(tag, tags) {
  return {
    type: ADD_TAG,
    editableTags: [...tags, tag]
  };
}

export const REMOVE_TAG = "REMOVE_TAG";
export function removeTag(key, tags) {
  const newTag = Object.assign({}, tags[key], {active: false});
  tags[key] = newTag;
  return {
    type: REMOVE_TAG,
    editableTags: [...tags]
  };
}

export const ASSIGN_TAGS = "ASSIGN_TAGS";
export function assignTags(tags) {
  return {
    type: ASSIGN_TAGS,
    editableTags: tags || []
  };
}
