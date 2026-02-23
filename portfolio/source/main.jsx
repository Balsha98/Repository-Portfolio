// IMPORTED CORE COMPONENTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMPORTED CUSTOM COMPONENTS
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
