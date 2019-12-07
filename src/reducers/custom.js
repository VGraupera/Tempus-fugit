import { SET_CUSTOM } from "../actions";

const initialState = {
  label: "",
  dates: ["2019-12-06T08:00:00.000Z","2019-12-07T08:00:00.000Z"],
  enabled: false,
};

export default function daysReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CUSTOM:
      return Object.assign({}, state, {
        ...action.value
      });
    default:
      return state;
  }
}
