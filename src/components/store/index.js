import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middLeware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middLeware))
);

export default store;
