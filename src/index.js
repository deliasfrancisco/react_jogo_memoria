import React from "react"; // Diego Francisco
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import "./assets/styles/App.scss";
import "./assets/styles/themes/dark.orange.scss";

const MainApp = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

export default ReactDOM.render(<MainApp />, document.getElementById("root"));
