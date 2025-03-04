import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./Styles/index.css";
import { ThemeProvider } from "./Pages/Home/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/new-site/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
