// IMORTED CORE COMPONENTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMORTED CUSTOM COMPONENTS
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
