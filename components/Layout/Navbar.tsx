import Link from "next/link";
const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                Market <span className="sr-only">(current)</span>
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
            <a className="nav-item nav-link" href="#">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div
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
      </div>
    </nav>
  );
};

export default Navbar;
