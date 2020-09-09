import AuthHeader from "../../components/auth/AuthHeader";
import { useState } from "react";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  const [username] = useState("no-name");
  return (
    <AuthHeader title="Blog Page">
      <script
        src="https://kit.fontawesome.com/3303a2a495.js"
        crossOrigin="anonymous"
      ></script>
      <div className="row">
        <div className="navbar">
          <img className="logo" src="/images/Logo.png" />
          <ul
            className="nav pull-right"
            style={{ marginTop: 13, marginRight: 20 }}
          >
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                style={{
                  color: "black",
                  fontSize: 17,
                  backgroundColor: "white",
                }}
              >
                {username}
                <b className="caret"></b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/user/profile">
                    <a>View Profile</a>
                  </Link>
                </li>
                <li>
                  <a>Account Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="nav pull-right" style={{ marginTop: 10 }}>
            <i className="far fa-bell" style={{ margin: "15px 20px" }}></i>
            <img
              src="/images/blank_avatar.jpeg"
              alt="Avatar"
              style={{
                width: "50px",
                height: "50px",
                marginTop: 2,
                marginRight: 10,
              }}
            />
          </div>
        </div>
        <div className="container"></div>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        ></script>
        <script type="text/javascript" src="/js/a.js"></script>
      </div>
    </AuthHeader>
  );
}
