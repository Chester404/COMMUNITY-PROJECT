import { createContext, useReducer } from "react";

export const Store = createContext<string | any>("");

type TTokens = {
  accessToken: string;
  refreshToken: string;
};

interface IGState {
  username: string;
  emailaddress: string;
  image: string;
  tokens: TTokens;
  organization: boolean;
  userProfile: any;
}

const gState: IGState = {
  username: "",
  emailaddress: "",
  image: "",
  tokens: { accessToken: "", refreshToken: "" },
  organization: false,
  userProfile: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, emailaddress: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    default:
      return state;
      case "SET_ORGANIZATION":
        return { ...state, organization: action.payload };
      case "SET_USER_INFO":
        return { ...state, userProfile: action.payload };

  }
};

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, gState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
