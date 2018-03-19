export const ADD_TAG = "ADD_TAG";
export function addTag(tag, tags) {
  return {
    type: ADD_TAG,
    editableTags: [...tags, tag]
  };
}

export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
export function toggleActive(key, tags) {
  const newTag = Object.assign({}, tags[key], {active: !tags[key].active});
  tags[key] = newTag;
  return {
    type: TOGGLE_ACTIVE,
    editableTags: [...tags]
  };
}

export const ASSIGN_TAGS = "ASSIGN_TAGS";
export function assignTags(tags) {
  const editableTags = tags ? tags.map(obj=>({value: obj, active: true})) : []
  return {
    type: ASSIGN_TAGS,
    editableTags
  };
}
