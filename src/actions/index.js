/*
 * action types
 */

export const SET_TIME_USED = "SET_TIME_USED";
export const SET_DAILY_HOURS = "SET_DAILY_HOURS";
export const SET_WEEKDAYS_ONLY = "SET_WEEKDAYS_ONLY";

/*
 * action creators
 */

export function setTimeUsed(value) {
  return { type: SET_TIME_USED, value };
}

export function setDailyHours(value) {
  return { type: SET_DAILY_HOURS, value };
}

export function setWeekdaysOnly(value) {
  return { type: SET_WEEKDAYS_ONLY, value };
}
