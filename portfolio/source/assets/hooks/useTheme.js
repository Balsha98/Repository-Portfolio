// IMORTED CORE COMPONENTS
import { useEffect, useState } from "react";

const STORAGE_THEME_KEY = "portfolio-theme";

const getCurrentTheme = function () {
	const currentTheme = localStorage.getItem(STORAGE_THEME_KEY);

	if (currentTheme) return currentTheme;

	const isPreferredTheme = window.matchMedia("(prefers-color-theme: light)").matches;

	return isPreferredTheme ? "light" : "dark";
};

const useTheme = function () {
	const [currentTheme, setCurrentTheme] = useState(() => getCurrentTheme());

	const onToggleTheme = () => setCurrentTheme((v) => (v === "light" ? "dark" : "light"));

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", currentTheme);

		localStorage.setItem(STORAGE_THEME_KEY, currentTheme);
	}, [currentTheme]);

	console.log(currentTheme);

	return { currentTheme, onToggleTheme };
};

export default useTheme;
