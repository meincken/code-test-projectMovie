import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./shared/global";
import Template from "./components/Template/";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyle />
    <Template />
  </>,
  document.getElementById("root")
);

reportWebVitals();
