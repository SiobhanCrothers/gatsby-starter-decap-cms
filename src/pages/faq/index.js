import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Layout from "../../components/Layout";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
