import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./components/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import Firebase, { FirebaseContext } from "./components/Firebase";

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <HashRouter>
          <Component />
        </HashRouter>
      </FirebaseContext.Provider>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./components/Main", () => {
    const NextApp = require("./components/Main").default;
    renderApp(NextApp);
  });
}
serviceWorker.unregister();
