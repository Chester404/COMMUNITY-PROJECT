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
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white" }}
    >
      <h1>
        {props.headerTitle ? (
          props.headerTitle
        ) : (
          <>
            <Link href="/">
              <a style={{ textDecoration: "none" }}>
                <img src="/images/Logo.png" />
              </a>
            </Link>
          </>
        )}
      </h1>
      {isLoggedIn ? (
        <>
          <div
            className="d-md-flex d-block flex-row mx-md-auto mx-0"
            style={navFontSize}
          >
            <div
              className="collapse navbar-collapse mr-auto"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link href="/marketplace">
                  <a className="nav-item nav-link active">
                    Marketplace <span className="sr-only">(current)</span>
                  </a>
                </Link>
                <Link href="/jobs">
                  <a className="nav-item nav-link">Jobs</a>
                </Link>
                <a className="nav-item nav-link" href="#">
                  Partnership
                </a>
                <a className="nav-item nav-link" href="#">
                  Forum
                </a>
                <Link href="/blog">
                  <a className="nav-item nav-link">Blog</a>
                </Link>
                <a>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Members
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Individual
                        </a>
                        <a className="dropdown-item" href="#">
                          Organization
                        </a>
                      </div>
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
          <div
            className="nav navbar-nav ml-auto"
            id="navbarNavDropdown"
            style={navFontSize}
          >
            <i className="far fa-bell" style={{ margin: "15px 20px" }}></i>
            <img
              src="/images/profileImage2.png"
              alt="Avatar"
              style={{
                width: "50px",
                height: "50px",
                marginTop: 2,
                marginRight: 10,
              }}
            ></img>
            <ul style={{ listStyle: "none", marginTop: 0, padding: 0 }}>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  James Asafuah
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link href="/user/profile">
                    <a className="dropdown-item">View Profile</a>
                  </Link>
                  <Link href="/admin">
                    <a className="dropdown-item">Account Settings</a>
                  </Link>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      window.localStorage.removeItem("cp-a");
                      router.push("/auth/login");
                    }}
                  >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* <div
            className="nav navbar-nav ml-auto"
            id="navbarNavDropdown"
            style={navFontSize}
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link href="/auth/login">
                  <a className="nav-link">
                    Login <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/auth/signup">
                  <a className="nav-link">Sign Up</a>
                </Link>
              </li>
            </ul>
          </div> */}
        </>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
