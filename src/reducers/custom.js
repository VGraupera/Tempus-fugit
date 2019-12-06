import { SET_CUSTOM } from "../actions";

const initialState = {
  label: "",
  dates: [0,0]
};

export default function daysReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOM:
      return Object.assign({}, state, {
        label: action.value.label,
        dates: action.value.dates,
      });
    default:
      return state;
  }
}
