import { createContext, useReducer } from "react";

export const Store = createContext<string | any>("");

type TTokens = {
  accessToken: string;
  refreshToken: string;
};

interface IGState {
  username: string;
  tokens: TTokens;
}

const gState: IGState = {
  username: "",
  tokens: { accessToken: "", refreshToken: "" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return action.payload;
    default:
      return state;
  }
};

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, gState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
