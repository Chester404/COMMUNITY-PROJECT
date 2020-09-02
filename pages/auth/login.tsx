import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Auth } from "../../lib/endpoints";
import { route } from "next/dist/next-server/server/router";

const Loader = () => (
  <span
    className="spinner-border spinner-border-sm"
    role="status"
    aria-hidden="true"
    style={{ width: "1.5rem", height: "1.5rem" }}
  ></span>
);

const Login = () => {
  const [show, setShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(null);
  const [isInputValid, setIsInputValid] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [promptBody, setPromptBody] = useState("");
  const [linkTo, setLinkTo] = useState(null);
  const [linkText, setLinkText] = useState(null);
  const [authentication_property, setaAthenticationProperty] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("blue");

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatusColor("blue");
    setStatus("Please wait...");
    try {
      const result = await new Auth().login(authentication_property, password);
      if (result.status === 200) {
        setLoading(false);
        console.log("RESULT:", result);
        setStatusColor("blue");
        setStatus("Authentication success");

        setTimeout(() => {
          // go to landing page
          window.localStorage.setItem("cp-a", result.data);
          router.push("/jobs");
          //   setPromptBody("Replace this prompt with landing page");
          //   setShow(true);
          //   setLoading(false);
        }, 250);
      }
    } catch (err) {
      console.log(err.message);
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        console.log("BAD CREDENTIALS");
        setStatusColor("red");
        setStatus("Please check your credentials and try again.");

        // setPromptBody("Please check your credentials and try again.");
        setLinkTo("signup");
        setLinkText("Signup");
        setShow(true);
        setLoading(false);
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        setStatusColor("red");
        setStatus("An error occured. Contact systems admin");
      } else if (err.message === "Network Error") {
        // bad network connection
        setStatusColor("red");
        setStatus("Please check your network connection and try again.");
        // setPromptBody("Please check your network connection and try again.");
        // setShow(true);
        setLoading(false);
      }
      setTimeout(() => {
        setStatus("");
      }, 3500);
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <link rel="stylesheet" type="text/css" href="/auth.css" />
        </Head>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <h3>
              <b>Login</b>
            </h3>
          </div>
          <br />
        </div>{" "}
        <div className="row">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <div className="form-group col-12">
              <label htmlFor="email">Email address / Phone Number</label>
              <input
                type="email"
                className="form-control cinput"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email or Phone number"
                value={authentication_property}
                onChange={(e) => setaAthenticationProperty(e.target.value)}
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control cinput"
                id="password"
                placeholder="Password"
                data-toggle="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group col-12">
              <button
                type="submit"
                className="btn btn-primary btn-block submitbutton"
                id="submitButton"
              >
                Login
              </button>
            </div>
            <div
              style={{
                textAlign: "center",
                color: statusColor,
              }}
            >
              &nbsp;{status}
            </div>
            <br />
            <div
              style={{
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              <a>Forgotten Password?</a>
              <br />
              Don't have an account?
              <Link href="/auth/signup">
                <a id="signup">Sign Up</a>
              </Link>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
