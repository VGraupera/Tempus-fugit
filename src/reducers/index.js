import { combineReducers } from 'redux'
import preferencesReducer from './preferences'
import daysReducer from './days'

export default combineReducers({
    prefs: preferencesReducer,
    days: daysReducer,
})