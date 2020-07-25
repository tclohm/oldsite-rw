import { useEffect } from "react";
import { useSessionStorage } from "./useSessionStorage";

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useSessionStorage("isDarkModeEnabled");

	useEffect(() => {
		const body = document.querySelector("body");
		if( darkMode === true ) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode])

	return [darkMode, setDarkMode];
};