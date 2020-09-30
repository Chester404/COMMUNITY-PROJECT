import { createContext, useReducer } from "react";

export const Store = createContext<string | any>("");

type TTokens = {
  accessToken: string;
  refreshToken: string;
};

interface IGState {
  tokens: TTokens;
  organization: boolean;
  userProfile: any;
}

const gState: IGState = {
  tokens: { accessToken: "", refreshToken: "" },
  organization: false,
  userProfile: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORGANIZATION":
      return { ...state, organization: action.payload };
    case "SET_USERINFO":
      return { ...state, userProfile: action.payload };
  }
};

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, gState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
