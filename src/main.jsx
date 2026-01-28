import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "./proivder/ThemeProvider";
import { OpenProvider } from "./proivder/OpenProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OpenProvider>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
    </OpenProvider>
    
  </StrictMode>
);
