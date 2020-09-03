import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Auth } from "../../lib/endpoints";
import { route } from "next/dist/next-server/server/router";
import axios from "axios";
import Prompt from "../../components/Prompt";

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
    try {
      const result = await axios.post("http://51.116.114.155:8080/auth/token", {
        authentication_property: authentication_property,
        password: password,
        // authentication_property: "ogembodennis@gmail.com",
        // password: "@Beloved2020",
      });

      if (result) {
        setLoading(false);
        if (result.status === 200) {
          window.localStorage.setItem("cp-a", JSON.stringify(result.data));
          setLoading(false);
          router.push("/blog");
        }
      }
    } catch (err) {
      setLoading(false);
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        console.log("BAD CREDENTIALS");
        setPromptBody("Please check your credentials and try again.");
        setLinkTo("signup");
        setLinkText("");
        setShow(true);
        setLoading(false);
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
      } else if (err.message === "Network Error") {
        // bad network connection
        setPromptBody("Please check your network connection and try again.");
        setShow(true);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <link rel="stylesheet" type="text/css" href="/auth.css" />
        </Head>
        <Prompt
          // body={`A confirmation has been sent to your email. Please retrieve the code and
          // confirm acount`}
          title=""
          linkTo={linkTo}
          linkText={linkText}
          show={show}
          handleClose={handleClose}
        >
          <p>{promptBody}</p>
        </Prompt>
        <div
          style={{
            textAlign: "center",
            margin: "50px 0",
          }}
        >
          <div>
            <h3>
              <b>Login</b>
            </h3>
          </div>
          <br />
        </div>{" "}
        <div className="row" style={{ margin: "0px 5px" }}>
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
                style={{ padding: "20px" }}
              />
            </div>
            <div className="form-group col-12" style={{ marginBottom: 30 }}>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control cinput"
                id="password"
                placeholder="Password"
                data-toggle="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "20px" }}
              />
            </div>
            <div className="form-group col-12">
              <button
                type="submit"
                className="btn btn-primary btn-block submitbutton"
                id="submitButton"
                style={{ padding: "10px" }}
              >
                Login
              </button>
            </div>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                color: "grey",
              }}
            >
              <a>Forgot password?</a>
              <br />
              <br />
              Don't have an account?{" "}
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
