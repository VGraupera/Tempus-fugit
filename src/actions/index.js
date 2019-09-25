/*
 * action types
 */

export const SET_TIME_USED = 'SET_TIME_USED'
export const SET_DAILY_HOURS = 'SET_DAILY_HOURS'

/*
 * action creators
 */

export function setTimeUsed(value) {
  return { type: SET_TIME_USED, value }
}


export function setDailyHours(value) {
    return { type: SET_DAILY_HOURS, value }
  }