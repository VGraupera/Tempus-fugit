import { SET_REMAINING } from "../actions";

const initialState = {
  showRemaining: "0"
};

export default function preferencesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REMAINING:
      return Object.assign({}, state, {
        showRemaining: action.value
      });
    default:
      return state;
  }
}
