/*
 * action types
 */

export const SET_REMAINING = 'SET_REMAINING'
export const SET_DAILY_HOURS = 'SET_DAILY_HOURS'

/*
 * action creators
 */

export function setRemaining(value) {
  return { type: SET_REMAINING, value }
}


export function setDailyHours(value) {
    return { type: SET_DAILY_HOURS, value }
  }