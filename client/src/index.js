import React from "react";
import RectDom from "react-dom/client";

import "./index.css";
import App from "./App";

const root = RectDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
