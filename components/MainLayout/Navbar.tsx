import Link from "next/link";
import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let lStorage = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    console.log("lStorage", lStorage);
    if (lStorage) {
      console.log("WHy here");
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
          <a className="header-brand" href="index.html">
            <img
              src="assets/images/Logo.png"
              className="header-brand-img main-logo"
              alt="logo"
              style={{ marginLeft: "-1em" }}
            />
          </a>
          {/* logo*/}
          <div className="d-none dropdown d-md-flex header-settings ml-auto">
            <a className="nav-link" href="#" id="market">
              <span className="lay-outstyle mt-1">Market</span>
            </a>
            <a className="nav-link" href="#" id="jobs">
              <span className="lay-outstyle mt-1">Jobs</span>
            </a>
            <a className="nav-link" href="#" id="artnership">
              <span className="lay-outstyle mt-1">Partnership</span>
            </a>
            <a className="nav-link" href="#" id="forum">
              <span className="lay-outstyle mt-1">Forum</span>
            </a>
            <a className="nav-link" href="#" id="blog">
              <span className="lay-outstyle mt-1">Blog</span>
            </a>
            <a className="nav-link" href="#" id="members">
              <span className="lay-outstyle mt-1">Members</span>
            </a>
          </div>
          <div className="d-flex order-lg-2 ml-auto header-right">
            <a
              href="#"
              id="notification"
              className="nav-link icon full-screen-link"
            >
              <i className="fe fe-bell" />
            </a>
            {/*Navbar */}
            <div className="dropdown header-profile">
              <a
                className="nav-link pr-0 leading-none d-flex pt-1"
                data-toggle="dropdown"
              >
                <span
                  id="memberprofile"
                  className="avatar avatar-md brround cover-image"
                  data-image-src="assets/images/img.jpg"
                  style={{
                    background: 'url("assets/images/img.jpg") center center',
                  }}
                ></span>
                <div className="ml-3">
                  <span style={{ color: "#000000" }}>
                    Louis Ewurama Young{" "}
                    <i className="fe fe-chevron-down ml-1" />
                  </span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-user" />
                  View Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-edit" />
                  Account Setting
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-power" /> Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
