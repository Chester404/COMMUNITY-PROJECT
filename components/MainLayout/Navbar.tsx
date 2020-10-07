import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
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

      if (lStorage.user.is_staff) setMemberListLink("userList");
    } else {
      setIsLoggedIn(false);
    }
    console.log(
      "NAMR OR TITLE",
      state.userProfile.name || state.userProfile.title
    );
    console.log("IAMGE", state.userProfile.image);
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
                          <a className="nav-link">Jobs</a>
                        </Link>
                        <Link href="/parnerships">
                          <a className="nav-link">Partnership</a>
                        </Link>
                        <Link href="/forum">
                          <a className="nav-link">Forum</a>
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

                    <div className="ml-auto header-right">
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
                          <div className="ml-3">
                            <span style={{ color: "#3f3d56", fontWeight: 700 }}>
                              {username}
                              <i className="fe fe-chevron-down ml-1" />
                            </span>
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
                              <i className="dropdown-icon fe fe-power" /> Log
                              Out
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Drowndown Menu (When logged in) ends here*/}

              {/* Menu Bar (when logged in) */}
              <div>
                <div className="d-none d-md-flex">
                  <Link href="/market">
                    <a
                      className="nav-link"
                      style={{
                        color: router.pathname == "/market" ? "" : "black",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Market</span>
                    </a>
                  </Link>
                  <Link href="/jobs">
                    <a className="nav-link">Jobs</a>
                  </Link>
                  <Link href="/parnerships">
                    <a className="nav-link">Partnership</a>
                  </Link>
                  <Link href="/forum">
                    <a className="nav-link">Forum</a>
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
                        color: router.pathname == "/memberlist" ? "" : "black",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Members</span>
                    </a>
                  </Link>
                  <div
                    className="d-flex order-lg-2 ml-auto header-right"
                    style={{ paddingLeft: "230px" }}
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
                        <div className="ml-3">
                          <span style={{ color: "#3f3d56", fontWeight: 700 }}>
                            {username}
                            <i className="fe fe-chevron-down ml-1" />
                          </span>
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
                          <a className="nav-link">Jobs</a>
                        </Link>
                        <Link href="/parnerships">
                          <a className="nav-link">Partnership</a>
                        </Link>
                        <Link href="/forum">
                          <a className="nav-link">Forum</a>
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
                    <div className="ml-auto header-right">
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
                <div className="d-none d-md-flex">
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
                    <a className="nav-link">Market</a>
                  </Link>
                  <Link href="/jobs">
                    <a className="nav-link">Jobs</a>
                  </Link>
                  <Link href="/parnerships">
                    <a className="nav-link">Partnership</a>
                  </Link>
                  <Link href="/forum">
                    <a className="nav-link">Forum</a>
                  </Link>
                  <Link href="/blog">
                    <a className="nav-link">Blog</a>
                  </Link>
                  <Link href="/memberlist">
                    <a className="nav-link">Members</a>
                  </Link>
                  <div
                    className="d-flex order-lg-2 ml-auto header-right"
                    style={{ paddingLeft: "230px" }}
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
                        className="btn btn-primary landingpage_signup_btn ml-5 mr-5"
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
