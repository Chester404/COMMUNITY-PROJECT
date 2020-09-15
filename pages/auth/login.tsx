import Head from "next/head";
import Link from "next/link";
import { useState, FormEvent, useEffect, useContext } from "react";
import { Auth, Users } from "../../lib/endpoints";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";
import MainLayout from "../../components/MainLayout";
import { Store } from "../../contextStore";

const Login = () => {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [togglepasswordeye, setTogglePasswordeye] = useState(false);
  const { dispatch } = useContext(Store);
  const router = useRouter();

  const handleClose = () => setShow(false);

  const callPrompt = (
    title: string,
    link: string,
    link_text: string,
    message: string
  ) => {
    setShow(true);
    setPromptTitle(title);
    setLinkText(link_text);
    setLinkTo(link);
    setPromptBody(message);
  };

  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    callPrompt("Login", "", "", "Please wait...");
    try {
      const response = await new Auth().login(
        authentication_property,
        password
      );
      if (response.status === 200) {
        response.data.emailaddress = authentication_property;
        window.localStorage.setItem("cp-a", JSON.stringify(response.data));
        const userInfo = await new Users().getUserProfile();
        if (userInfo.name.length > 0) {
          response.data.username = userInfo.name;
        } else {
          response.data.username = "No Name";
        }
        response.data.image = userInfo.image
          ? userInfo
          : "/assets/images/Profile_Icon.png";
        window.localStorage.setItem("cp-a", JSON.stringify(response.data));
        dispatch({
          type: "UPDATE_USERNAME",
          payload: userInfo.name,
        });
        dispatch({
          type: "SET_EMAIL",
          payload: authentication_property,
        });
        dispatch({
          type: "SET_IMAGE",
          payload: userInfo.image,
        });

        setShow(false);
        router.push("/blog");
      } else {
        callPrompt("Login", "", "Close", "An error occured.");
      }
    } catch (err) {
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        callPrompt(
          "Login",
          "",
          "Close",
          "Please check your credentials and try again."
        );
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        callPrompt("Login", "", "Close", "Request failed");
      } else if (err.message === "Network Error") {
        // bad network connection
        callPrompt(
          "Login",
          "",
          "Close",
          "Please check your network connection and try again."
        );
      } else {
        callPrompt("Login", "", "Close", "An error occured.");
      }
    }
  };

  return (
    <>
      <MainLayout>
        <Prompt
          title={prompt_title}
          linkTo={link_to}
          linkText={link_text}
          show={show}
          success={link_to.length > 0 ? true : false}
          handleClose={handleClose}
        >
          <p>{prompt_body}</p>
        </Prompt>

        <div className="logincontent">
          <div style={{ textAlign: "center", paddingTop: "12%" }}>
            <h3>
              <b>Login</b>
            </h3>
            <br />
          </div>
          <form className="needs-validation" noValidate onSubmit={authenticate}>
            <div className="form-group">
              <label htmlFor="InputEmail" className="formlabel">
                Email / Phone Number
              </label>
              <input
                type="email"
                className="form-control textbox"
                id="InputEmail"
                placeholder="Please enter a valid email or phone number"
                value={authentication_property}
                onChange={(e) => setAuthenticationProperty(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputPassword1" className="formlabel">
                Password
              </label>
              <div className="input-group" id="show_hide_password">
                <input
                  type={togglepasswordeye ? "text" : "password"}
                  className="form-control textbox"
                  id="InputPassword1"
                  placeholder="Password must be at least 8 characters"
                  data-toggle="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-addon">
                  <a href="#">
                    <i
                      className={`${
                        togglepasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                      }`}
                      onClick={() => setTogglePasswordeye(!togglepasswordeye)}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <div>
                <a href="#" className="texthover">
                  Forgot Password?
                </a>
              </div>
              <br />
              <div>
                Don't have an account?{" "}
                <Link href="/auth/signup">
                  <a className="signuptext">
                    <b>Sign Up</b>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default Login;
