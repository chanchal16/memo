import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
