// import AuthHeader from "../../components/auth/AuthHeader";
import Link from "next/link";
import { useState, FormEvent, useEffect, useContext } from "react";
import axios from "axios";
import Prompt from "../../components/Prompt";
import Head from "next/head";
import { Store } from "../../contextStore";
import MainLayout from "../../components/MainLayout";

const Signup = () => {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [is_organization, setIsOrganization] = useState(false);
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [togglepasswordeye, setTogglePasswordeye] = useState(false);
  const [toggleconfirmpasswordeye, setToggleConfirmPasswordeye] = useState(
    false
  );
  const { dispatch } = useContext(Store);
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

  const register = async (e: FormEvent) => {
    e.preventDefault();
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        authentication_property
      )
    ) {
      //email or phone number is valid. Currently validating 10 digits
    } else {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check E-mail: Please enter the correct email address or phone number"
      );
      return;
    }

    //Not an optimized way of coding. But as a temporal fix
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: There should be at least one lowercase character"
      );
      return;
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: There should be at least one uppercase character"
      );
      return;
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (!password.match(numbers)) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: There should be at least one numeric character"
      );
      return;
    }

    // Validate length
    if (password.length < 8) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: Password should be eight or more characters long"
      );
      return;
    }

    if (password !== confirm_password) {
      callPrompt("Sign Up", "", "Close", "Password mismatch");
      return;
    }
    callPrompt("Sign Up", "", "", "Please wait...");
    try {
      const response = await axios.post(
        "http://51.116.114.155:8080/auth/registration/",
        {
          email: authentication_property,
          password: password,
          is_organization: is_organization,
        }
      );

      if (response.status === 200 || response.statusText === "Created") {
        // go to landing page

        callPrompt(
          "Sign Up",
          "/auth/confirmaccount",
          "Confirm Account",
          "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
        );
        dispatch({
          type: "SET_EMAIL",
          payload: authentication_property,
        });
      } else {
        callPrompt("Sign Up", "", "Close", "Failed to register");
      }
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        callPrompt(
          "Sign Up",
          "",
          "Close",
          "User with this email already exists"
        );
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        callPrompt("Sign Up", "", "Close", "Request failed");
      } else if (err.message === "Network Error") {
        // bad network connection
        callPrompt(
          "Sign Up",
          "",
          "Close",
          "Please check your network connection and try again."
        );
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

        <div className="signupcontent">
          <div style={{ textAlign: "center" }} className="mb-5">
            <div>
              <img className="innerlogo" src="/images/Logo.png" />
            </div>
            <br />
            <br />
            <div>
              <b>Make the most out of your business</b>
            </div>
            <br />
            <div>
              Already on Market Circle?{" "}
              <Link href="/auth/login">
                <a className="signuptext">
                  <b>Log in</b>
                </a>
              </Link>
            </div>
          </div>

          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="email" className="formlabel">
                Email
              </label>
              <input
                type="email"
                className="form-control textbox"
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Please enter a valid email"
                value={authentication_property}
                onChange={(e) => setAuthenticationProperty(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputPassword1" className="formlabel">
                Password
              </label>
              <div className="input-group">
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

            <div className="form-group">
              <label htmlFor="InputPassword1" className="formlabel">
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  type={toggleconfirmpasswordeye ? "text" : "password"}
                  className="form-control textbox"
                  id="InputPassword2"
                  placeholder="Re-Enter the same password as above"
                  data-toggle="password"
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="input-group-addon">
                  <a href="#">
                    <i
                      className={`${
                        toggleconfirmpasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                      }`}
                      onClick={() =>
                        setToggleConfirmPasswordeye(!toggleconfirmpasswordeye)
                      }
                    />
                  </a>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <input
                type="radio"
                id="organization"
                name="account_type"
                defaultValue="organization"
              />
              <label htmlFor="organization" className="radio_spc ml-2">
                Organization
              </label>
              <span className="ml-5">
                <input
                  type="radio"
                  id="individual"
                  name="account_type"
                  defaultValue="individual"
                  className="radio_spc"
                  defaultChecked
                />
                <label htmlFor="individual" className="ml-2">
                  Individual
                </label>
              </span>
            </div>

            <div style={{ textAlign: "center", paddingRight: "10px" }}>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="signup_button"
              >
                Sign Up
              </button>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              By clicking sign up, you agree to the Market Circle
              <br />
              <b>
                <a href="#." className="texthover" id="user_agreement">
                  User Agreement,
                </a>
              </b>{" "}
              <b>
                <a href="#." className="texthover" id="privacy_policy">
                  Privacy Policy
                </a>
              </b>{" "}
              and{" "}
              <b>
                <a href="#." className="texthover" id="cookie_policy">
                  Cookie Policy.
                </a>
              </b>
            </div>
            <b></b>
          </form>

          <b></b>
        </div>
      </MainLayout>
    </>
  );
};

export default Signup;
