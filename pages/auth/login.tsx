import Head from "next/head";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Auth } from "../../lib/endpoints";
import { useRouter } from "next/router";

const Login = () => {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await new Auth().login(
        authentication_property,
        password
      );
      console.log(response);
      if (response.status === 200) {
        window.localStorage.setItem("cp-a", JSON.stringify(response.data));
        router.push("/blog");
      }
    } catch (err) {
      console.log(e);
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        alert("Please check your credentials and try again.");
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        alert("Request failed");
      } else if (err.message === "Network Error") {
        // bad network connection
        alert("Please check your network connection and try again.");
      }
    }
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/sign_up.css" />
        <title>Community Project | Login Page</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js"
        ></script>
      </Head>
      <style jsx>{`
        .container {
          margin: 0 auto;
          margin-top: 70px;
          width: 30%;
          background: #ffffff;
          padding: 45px;
        }
        .submitbutton {
          background: #3964fc;
          border: #3964fc;
          border-radius: 10px;
        }
        :hover .submitbutton {
          background: #3964fc;
          border: #3964fc;
        }
        .cinput {
          border-radius: 10px;
        }
        .input-group-addon:last-child {
          background-color: #ffffff;
          border-radius: 0px 10px 10px 0px;
        }
      `}</style>
      <div>
        <div className="row">
          <div className="navbar">
            <img className="logo" src="/images/Logo.png" />
          </div>
        </div>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div>
              <h3>
                <b>Login</b>
              </h3>
            </div>
            <br />
          </div>{" "}
          <div className="row">
            <form onSubmit={authenticate}>
              <div className="form-group">
                <label htmlFor="email">Email address / Phone Number</label>
                <input
                  type="email"
                  className="form-control cinput"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={authentication_property}
                  onChange={(e) => setAuthenticationProperty(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control cinput"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  data-toggle="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-block submitbutton"
                >
                  Login
                </button>
              </div>
              <br />
              <div style={{ textAlign: "center" }}>
                <a>Forgotten Password?</a>
                <br />
                <br />
                Don't have an account?
                <Link href="/auth/signup/">
                  <a>Sign Up</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="/js/a.js"></script>
      <script
        src="https://kit.fontawesome.com/3303a2a495.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Login;
