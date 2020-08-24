import { createContext, useReducer } from "react";

export const Store = createContext<string | any>("");

const reducer = (state, action) => {
	switch (action.type) {
		case "change":
			return action.payload;
		default:
			return state;
	}
};

export const ContextWrapper = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, "Asafuah");
	return (
		<Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
	);
};
