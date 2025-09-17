import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; 
// import { BrowserRouter } from "react-router";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>
);
