import { createStore } from "redux";
import rootReducer from "../reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  saveState({
    prefs: store.getState().prefs,
    days: store.getState().days
  });
});

export default store;
