import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Accordion from "./Accordion";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Accordion />
  </StrictMode>,
  rootElement
);
