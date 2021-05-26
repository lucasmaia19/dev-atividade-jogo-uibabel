import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Example } from "./Example";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <Example /> */}
    {/* <Example2 /> */}
    <Example3 />
    {/* <Example4 /> */}
    {/* <App /> */}
  </React.StrictMode>,
  rootElement
);
