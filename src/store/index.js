import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/es/storage";

import rootReducers from "../redux/ducks";

let middleware = [thunk, logger];

const config = {
  key: "primary",
  storage
};

let persistedReducer = persistReducer(config, rootReducers);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(compose(applyMiddleware(...middleware)))
  );

  let persistor = persistStore(store);

  return {
    store,
    persistor
  };
};
