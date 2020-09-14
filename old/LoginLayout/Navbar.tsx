import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const logout = () => {
    window.localStorage.removeItem("cp-a");
    router.push("/auth/login");
  };
  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    if (lStorage) {
      dispatch({ type: "UPDATE_USERNAME", payload: lStorage.username });
      dispatch({ type: "SET_EMAIL", payload: lStorage.emailaddress });
      dispatch({ type: "SET_IMAGE", payload: lStorage.image });
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div
      className="hor-header header d-flex navbar-collapse"
      style={{ height: "80px !important" }}
    >
      <div className="container">
        <div className="d-flex">
          <a className="animated-arrow hor-toggle horizontal-navtoggle">
            <span />
          </a>
          <a className="header-brand" href="#">
            <img
              src="/assets/images/Logo.png"
              className="header-brand-img main-logo"
              alt="logo"
              style={{ marginLeft: "-1em" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
