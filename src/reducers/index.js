import { combineReducers } from 'redux'
import preferencesReducer from './preferences'
import daysReducer from './days'
import customReducer from './custom'


export default combineReducers({
    prefs: preferencesReducer,
    days: daysReducer,
    custom: customReducer,
})