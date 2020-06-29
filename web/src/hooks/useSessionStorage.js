import { useState } from "react";

export const useSessionStorage = (key, initialValue) => {
	const [stored, setStored] = useState(() => {
		const item = sessionStorage.getItem(key)
		return item ? JSON.parse(item) : initialValue
	});

	const setValue = (value) => {
		setStored(value)
		sessionStorage.setItem(key, JSON.stringify(value));
	};
	
	return [stored, setValue];
}