import { SET_TIME_USED } from "../actions";

const initialState = {
    timeUsed: '0'
};

export default function preferencesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIME_USED:
      return Object.assign({}, state, {
        timeUsed: action.value
      });
    default:
      return state;
  }
}
