import { SET_TIME_USED, SET_WEEKDAYS_ONLY } from "../actions";

const initialState = {
  timeUsed: "0",
  weekDaysOnly: false
};

export default function preferencesReducer(state = initialState, action) {
  console.log(action);
  
  switch (action.type) {
    case SET_TIME_USED:
      return Object.assign({}, state, {
        timeUsed: action.value
      });
    case SET_WEEKDAYS_ONLY:
      console.log("SET_WEEKDAYS");
      
      return Object.assign({}, state, {
        weekDaysOnly: action.value
      });
    default:
      return state;
  }
}
