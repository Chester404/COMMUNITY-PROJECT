import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
import { Dropdown, DropdownButton } from "react-bootstrap";

const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);
  const [tempholder, setTempHolder] = useState(false);
  const [userimage, setUserImage] = useState("");
  const [memberlistlink, setMemberListLink] = useState("memberlist");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const logout = () => {
    window.localStorage.removeItem("cp-a");
    window.localStorage.removeItem("user-profile");
    setIsLoggedIn(false);
    router.push("/");
  };
  useEffect(() => {
    let lStorage: any = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    if (lStorage) {
      let userprofile: any = JSON.parse(
        window.localStorage.getItem("user-profile")
      );

      dispatch({
        type: "SET_USERINFO",
        payload: userprofile,
      });
      setUserImage(state.userProfile.image || "/images/Profile_Icon.png");
      state.userProfile.name || state.userProfile.title
        ? setUsername(state.userProfile.name || state.userProfile.title)
        : setUsername("No Name");
      setIsLoggedIn(true);
      setIsOrganization(lStorage.user.is_organization);

      if (lStorage.user.is_staff) setMemberListLink("/memberlist");
    } else {
      setIsLoggedIn(false);
    }

    if (
      router.pathname.includes("/login") ||
      router.pathname.includes("/signup") ||
      router.pathname.includes("/confirmaccount") ||
      router.pathname.includes("/forgottenpassword") ||
      router.pathname.includes("/resetpassword")
    ) {
      setTempHolder(false);
    } else {
      setTempHolder(true);
    }
  }, []);

  return (
    <div
      className="hor-header header d-flex navbar-collapse sticky sticky-pin"
      style={{
        height: "80px !important",
        zIndex: 99999,
      }}
    >
      <div className="container">
        <div className="d-flex">
          <a className="animated-arrow hor-toggle horizontal-navtoggle">
            <span />
          </a>

          {/* Logo */}
          <Link href="/">
            <a className="header-brand">
              <img
                src="/assets/images/Logo.png"
                className="header-brand-img main-logo"
                alt="logo"
                style={{ marginLeft: "-1em" }}
              />
            </a>
          </Link>

          {/* Logo ends here */}

          {isLoggedIn ? (
            <>
              {/* Mobile Drowndown Menu (When logged in)*/}
              <div className="mobilelogbtns">
                <div className="container">
                  <div className="d-flex">
                    <div className="dropdown">
                      <a className="nav-link" data-toggle="dropdown" href="#">
                        <a className="btn btn-secondary mobile-menubtn btn-icon text-white mr-2">
                          <span>
                            <i className="fe fe-menu" />
                          </span>
                        </a>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <Link href="/">
                          <a className="nav-link lay-outstyle">Home</a>
                        </Link>
                        <Link href="/market">
                          <a
                            className="nav-link"
                            style={{
                              color:
                                router.pathname == "/market" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Market</span>
                          </a>
                        </Link>
                        <Link href="/jobs">
                          <a className="nav-link lay-outstyle">Jobs</a>
                        </Link>
                        <Link href="/partnerships">
                          <a className="nav-link lay-outstyle">Partnership</a>
                        </Link>
                        <Link href="/forum">
                          <a className="nav-link lay-outstyle">Forum</a>
                        </Link>
                        <Link href="/blog">
                          <a
                            className="nav-link"
                            style={{
                              color: router.pathname == "/blog" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Blog</span>
                          </a>
                        </Link>
                        <Link href="/memberlist">
                          <a
                            className="nav-link"
                            style={{
                              color:
                                router.pathname == "/memberlist" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Members</span>
                          </a>
                        </Link>
                        <Link href="/">
                          <a 
                          onClick={logout}
                          className="nav-link lay-outstyle">Log out</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Drowndown Menu (When logged in) ends here*/}

              {/* Menu Bar (when logged in) */}
              <div>
                <div className="d-none d-md-flex">
                  <div className="d-none dropdown d-md-flex header-settings ml-auto">



                  {isOrganization ? 
                  <DropdownButton id="dropdown-basic-button" className="marketlabel" title="Market">
                  <Link href="/products/add"><a className="nav-link"><Dropdown.Item href="#/action-1">Add products</Dropdown.Item></a></Link>
                  <Link href="/products/viewmyproducts"><a className="nav-link"><Dropdown.Item href="#/action-2">View all products</Dropdown.Item></a></Link>
                  </DropdownButton>
                  
                  :
                    <Link href="/market">
                    <a className="nav-link">
                      <span className="lay-outstyle mt-1">Market</span>
                    </a>
                  </Link>
                  
                }
                  

                  

                <Link href="/jobs">
                  <a
                    className="nav-link"
                    style={{
                      color: router.pathname == "/jobs" ? "" : "black",
                    }}
                  >
                    <span className="lay-outstyle mt-1">Jobs</span>
                  </a>
                </Link>
                {isLoggedIn ? (
                  <Link href="/partnerships">
                    <a
                      className="nav-link"
                      style={{
                        color:
                          router.pathname == "/partnerships" ? "" : "black",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Partnerships</span>
                    </a>
                  </Link>
                ) : null}
                <Link href="/forum">
                  <a
                    className="nav-link"
                    style={{
                      color: router.pathname == "/forum" ? "" : "black",
                    }}
                  >
                    <span className="lay-outstyle mt-1">Forum</span>
                  </a>
                </Link>
                <Link href="/blog">
                  <a
                    className="nav-link"
                    style={{ color: router.pathname == "/blog" ? "" : "black" }}
                  >
                    <span className="lay-outstyle mt-1">Blog</span>
                  </a>
                </Link>
                <Link href={`/${memberlistlink}`}>
                  <a
                    className="nav-link"
                    style={{
                      color: router.pathname == "/memberlist" ? "" : "black",
                    }}
                  >
                    <span className="lay-outstyle mt-1">Members</span>
                  </a>
                </Link>
              </div>
                  <div
                    className="d-flex order-lg-2 ml-auto header-right"
                    style={{ paddingLeft: "150px" }}
                  >
                    <div className="dropdown header-profile">
                      <a
                        className="nav-link pr-0 leading-none d-flex pt-1"
                        data-toggle="dropdown"
                      >
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-image-src="/images/blank_avatar.jpeg"
                          style={{
                            background: `url(${userimage}) center center`,
                          }}
                        ></span>
                        <div className="ml-3 row ">
                          <div className="username-ellipsis">
                            <span style={{ color: "#3f3d56", fontWeight: 700 }}>
                              {username}
                            </span>
                          </div>
                            <span><i className="fe fe-chevron-down ml-1" /></span>
                        </div>
                      </a>
                      <div className="dropdown-menu profiledrop dropdown-menu-right dropdown-menu-arrow">
                        <Link
                          href={
                            isOrganization ? "/businessprofile" : "/profile"
                          }
                        >
                          <a className="dropdown-item itemname">
                            <i className="dropdown-icon fe fe-user" />
                            View Profile
                          </a>
                        </Link>
                        <Link href="/auth/account-settings">
                          <a className="dropdown-item itemname">
                            <i className="dropdown-icon fe fe-edit" />
                            Account Setting
                          </a>
                        </Link>

                        <a
                          className="dropdown-item itemname"
                          href="#"
                          onClick={logout}
                        >
                          <i className="dropdown-icon fe fe-power" /> Log Out
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <Link
                            href={
                              isOrganization ? "/businessprofile" : "/profile"
                            }
                          >
                            <a className="dropdown-item itemname">
                              <i className="dropdown-icon fe fe-user" />
                              View Profile
                            </a>
                          </Link>
                          <a className="dropdown-item itemname" href="#">
                            <i className="dropdown-icon fe fe-edit" />
                            Account Setting
                          </a>
                          <a
                            className="dropdown-item itemname"
                            href="#"
                            onClick={logout}
                          >
                            <i className="dropdown-icon fe fe-power" /> Log Out
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Menu Bar (when logged in) ends here */}
            </>
          ) : tempholder ? (
            <>
              {/* Mobile Drowndown Menu (Before log in)*/}
              <div className="mobilesignbtns">
                <div className="container">
                  <div className="d-flex">
                    <div className="dropdown">
                      <a className="nav-link" data-toggle="dropdown" href="#">
                        <a className="btn btn-secondary mobiletem-menubtn btn-icon text-white mr-2">
                          <span>
                            <i className="fe fe-menu" />
                          </span>
                        </a>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <Link href="/market">
                          <a
                            className="nav-link"
                            style={{
                              color:
                                router.pathname == "/market" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Market</span>
                          </a>
                        </Link>
                        <Link href="/jobs">
                          <a className="nav-link lay-outstyle">Jobs</a>
                        </Link>
                        <Link href="/partnerships">
                          <a className="nav-link lay-outstyle">Partnership</a>
                        </Link>
                        <Link href="/forum">
                          <a className="nav-link lay-outstyle">Forum</a>
                        </Link>
                        <Link href="/blog">
                          <a
                            className="nav-link"
                            style={{
                              color: router.pathname == "/blog" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Blog</span>
                          </a>
                        </Link>
                        <Link href="/memberlist">
                          <a
                            className="nav-link"
                            style={{
                              color:
                                router.pathname == "/memberlist" ? "" : "black",
                            }}
                          >
                            <span className="lay-outstyle mt-1">Members</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className=" header-right mr-6 mt-2">
                      <Link href="/auth/login">
                        <a
                          className="landingpage_login_btn ml-6"
                          id="landingpage_login_btn"
                        >
                          Login
                        </a>
                      </Link>
                      <Link href="/auth/signup">
                        <a
                          className="btn btn-primary landingpage_signup_btn ml-5 mr-5"
                          id="landingpage_signup_btn"
                        >
                          Signup
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Drowndown Menu (Before log in) ends here*/}

              {/* Menu Bar (Before log in) */}
              <div>
                <div className="d-none d-md-flex switch-left">
                  {/*  <Link href="/market">
                    <a
                      className="nav-link"
                      style={{
                        color: router.pathname == "/market" ? "black" : "",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Market</span>
                    </a>
                  </Link> */}
                  <Link href="/market">
                    <a className="nav-link lay-outstyle">Market</a>
                  </Link>
                  <Link href="/jobs">
                    <a className="nav-link lay-outstyle">Jobs</a>
                  </Link>
                  <Link href="/partnerships">
                    <a className="nav-link lay-outstyle">Partnership</a>
                  </Link>
                  <Link href="/forum">
                    <a className="nav-link lay-outstyle">Forum</a>
                  </Link>
                  <Link href="/blog">
                    <a className="nav-link lay-outstyle">Blog</a>
                  </Link>
                  <Link href="/memberlist">
                    <a className="nav-link lay-outstyle">Members</a>
                  </Link>
                  <div
                    className="d-flex order-lg-2 ml-auto header-right"
                    style={{ paddingLeft: "150px" }}
                  >
                    <Link href="/auth/login">
                      <a
                        className="landingpage_login_btn ml-6"
                        id="landingpage_login_btn"
                      >
                        Login
                      </a>
                    </Link>
                    <Link href="/auth/signup">
                      <a
                        className="btn btn-primary landingpage_signup_btn mt-1 ml-5"
                        id="landingpage_signup_btn"
                      >
                        Signup
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Menu Bar (Before log in) ends here */}
            </>
          ) : (
            <Link href="/">
              <a className="header-brand">
                <img
                  src="/assets/images/Logo.png"
                  className="header-brand-img login-logo"
                  alt="logo"
                  style={{ marginLeft: "-1em" }}
                />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
