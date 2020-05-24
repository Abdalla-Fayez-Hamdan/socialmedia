import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReduser from "./redusers/userReduser";
import dataReduser from "./redusers/dataReduser";
import uiReduser from "./redusers/uiReduser";

const initialState = {};

const middleware = [thunk];

const redusers = combineReducers({
  user: userReduser,
  data: dataReduser,
  UI: uiReduser //fixed
});

const store = createStore(
  redusers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
