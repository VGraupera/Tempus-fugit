import { SET_DAILY_HOURS } from "../actions";

const initialState = {
  dailyHours: [0,24]
};

export default function daysReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DAILY_HOURS:
      return Object.assign({}, state, {
        dailyHours: action.value
      });
    default:
      return state;
  }
}
