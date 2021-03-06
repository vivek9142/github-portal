import { createStore } from "redux";
import usersReducer from "./reducer/usersReducer";
import userReducer from "./reducer/userReducer";
import searchReducer from "./reducer/searchReducer";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
  query: searchReducer,
  usersData: usersReducer,
  userData:userReducer
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
