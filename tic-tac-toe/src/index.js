import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Game from "./Game";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Game></Game>
  </StrictMode>
);
