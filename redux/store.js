import { 
  legacy_createStore, 
  applyMiddleware, 
  combineReducers 
} from "redux";
import thunk from "redux-thunk";

// import reducer
import { user } from "./reducer/userReducer";

const rootReducer = combineReducers(
  { user }
);

const store = legacy_createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

export default store