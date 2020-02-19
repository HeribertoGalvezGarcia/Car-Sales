const REMOVE_FEATURE = 'REMOVE_FEATURE';
const ADD_FEATURE = 'ADD_FEATURE';

function removeFeature(item) {
  return {
    type: REMOVE_FEATURE,
    payload: item
  };
}

function addFeature(item) {
  return {
    type: ADD_FEATURE,
    payload: item
  };
}

export {REMOVE_FEATURE, ADD_FEATURE, removeFeature, addFeature};
