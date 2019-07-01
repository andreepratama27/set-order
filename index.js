import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./src/store";

const { persistor, store } = configureStore();

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppContainer);
