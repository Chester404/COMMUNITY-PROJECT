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
      const userprofile = state;
      userprofile.userProfile = action.payload;
      return { ...state };
    case "UPDATE_USERNAME":
      const temp = state.userProfile;
      temp.name = action.payload;
      return { ...state, userProfile: temp };
    case "UPDATE_ORGANIZATION_TITLE":
      const org_temp = state.userProfile;
      org_temp.title = action.payload;
      return { ...state, userProfile: org_temp };      
    case "SET_IMAGE":
      const temps = state.userProfile;
      temps.image = action.payload;
      return { ...state, userProfile: temps };
      return;
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
