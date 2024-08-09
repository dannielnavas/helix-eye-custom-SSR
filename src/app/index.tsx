import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/favicon.ico";
import { App } from "./containers/App";

const container = document.getElementById("app");
// const root = createRoot(container);

const initialProps = window.__INITIAL_PROPS__;

console.log("initialProps", initialProps);

hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps} />
  </BrowserRouter>
);
