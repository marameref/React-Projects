// redux/store.js
import { createStore } from "redux";
import rootReducer from "./reducer";

// 3. Create the Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: for Redux DevTools
);

export default store;
