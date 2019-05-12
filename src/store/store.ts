import { combineReducers, createStore } from "redux";
import { personReducer } from "./person/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  person: personReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);
