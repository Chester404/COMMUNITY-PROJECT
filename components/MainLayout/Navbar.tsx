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
          {!isLoggedIn ? (
            <Link href="/">
              <a className="header-brand">
                <img
                  src="/assets/images/Logo.png"
                  className="header-brand-img login-logo"
                  alt="logo"
                />
              </a>
            </Link>
          ) : null}
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
          {isLoggedIn ? (
            <>
              <div>
                <div className="btn-group mt-2 mb-2">
                  <button
                    type="button"
                    className="btn btn-default menu-button"
                    data-toggle="dropdown"
                  >
                    <i
                      className="fe fe-menu fa-lg"
                      style={{ fontSize: "20px" }}
                    />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li>
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
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Partnership</a>
                    </li>
                    <li>
                      <a href="#">Forum</a>
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
              </div>

              {/* logo*/}
              <div className="d-none dropdown d-md-flex header-settings ml-auto">
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
                <a className="nav-link">
                  <span className="lay-outstyle mt-1">Jobs</span>
                </a>
                <a className="nav-link">
                  <span className="lay-outstyle mt-1">Partnership</span>
                </a>
                <a className="nav-link">
                  <span className="lay-outstyle mt-1">Forum</span>
                </a>
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
              <div className="d-flex order-lg-2 ml-auto header-right">
                {/*  <a href="#" className="nav-link icon full-screen-link">
              <i className="fa fa-bell-o" />
            </a> */}
                {/*Navbar */}
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
                      href={isOrganization ? "/businessprofile" : "/profile"}
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
                        href={isOrganization ? "/businessprofile" : "/profile"}
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
            </>
          ) : tempholder ? (
            <>
              <div className="navbar-list">
                <div className="btn-group mt-2 mb-2">
                  <button
                    type="button"
                    className="btn btn-default menu-button"
                    data-toggle="dropdown"
                  >
                    <i
                      className="fe fe-menu fa-lg"
                      style={{ fontSize: "20px" }}
                    />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li>
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
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Partnership</a>
                    </li>
                    <li>
                      <a href="#">Forum</a>
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>

                {/*  <div className="d-none dropdown d-md-flex">
                  <Link href="/market">
                    <a
                      className="nav-link"
                      style={{
                        color: router.pathname == "/market" ? "" : "#3f3d56",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Market</span>
                    </a>
                  </Link>
                  <a className="nav-link">
                    <span className="lay-outstyle mt-1">Jobs</span>
                  </a>

                  <a className="nav-link">
                    <span className="lay-outstyle mt-1">Partnership</span>
                  </a>
                  <a className="nav-link">
                    <span className="lay-outstyle mt-1">Forum</span>
                  </a>
                  <Link href="/blog">
                    <a
                      className="nav-link"
                      style={{
                        color: router.pathname == "/blog" ? "" : "#3f3d56",
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
                          router.pathname == "/memberlist" ? "" : "#3f3d56",
                      }}
                    >
                      <span className="lay-outstyle mt-1">Members</span>
                    </a>
                  </Link>
                </div>
 */}
                <div className="landingpage_login_signup_btns">
                  <Link href="/auth/login">
                    <a
                      className="landingpage_login_btn ml-6 mt-2"
                      id="landingpage_login_btn"
                    >
                      Login
                    </a>
                  </Link>
                  <Link href="/auth/signup">
                    <a
                      className="btn btn-primary landingpage_signup_btn  ml-5 mr-5"
                      id="landingpage_signup_btn"
                    >
                      Signup
                    </a>
                  </Link>
                </div>

                {/*your paste ends here*/}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
