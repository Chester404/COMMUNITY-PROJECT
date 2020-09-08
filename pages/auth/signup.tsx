import AuthHeader from "../../components/auth/AuthHeader";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import Prompt from "../../components/Prompt";
import Head from "next/head";

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
      ) ||
      /^\d{10}$/.test(authentication_property)
    ) {
      //email or phone number is valid. Currently validating 10 digits
    } else {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Please enter the correct email address or phone number"
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
        "There should be at least one lowercase character"
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
        "There should be at least one uppercase character"
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
        "There should be at least one numeric character"
      );
      return;
    }

    // Validate length
    if (password.length < 8) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Password should be eight or more characters long"
      );
      return;
    }

    if (password !== confirm_password) {
      callPrompt("Sign Up", "", "Close", "Password mismatch");
      return;
    }
    try {
      const response = await axios.post(
        "http://51.116.114.155:8080/auth/registration/",
        {
          email: authentication_property,
          password: password,
          is_organization: is_organization,
        }
      );

      console.log("response:", response);
      if (response.status === 200 || response.statusText === "Created") {
        // go to landing page

        callPrompt(
          "Sign Up",
          "/auth/confirmaccount",
          "Confirm Account",
          "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
        );
      } else {
        callPrompt("Sign Up", "", "Close", "Failed to register");
      }
    } catch (err) {
      console.log(err.message);
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

  useEffect(() => {
    var body = document.body;

    body.classList.add("parent");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up</title>
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

        <link rel="stylesheet" type="text/css" href="/sign_up.css" />
      </Head>
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
      <div>
        <div className="row">
          <div className="navbar">
            <img className="logo" src="/images/Logo.png" />
          </div>
        </div>
        <div className="content">
          <div style={{ textAlign: "center" }}>
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
              <a href="login.html" className="logintext">
                <b>Log in</b>
              </a>
            </div>
            <br />
          </div>
          <div className="row">
            <form onSubmit={register}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control textbox"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Please enter a valid email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control textbox"
                  id="InputPassword1"
                  placeholder="Password must be at least 8 characters"
                  data-toggle="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword2">Confirm Password</label>
                <input
                  type="password"
                  className="form-control textbox"
                  id="exampleInputPassword1"
                  placeholder="Re-Enter the same password as above"
                  data-toggle="password"
                />
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  type="radio"
                  id="organization"
                  name="account_type"
                  defaultValue="organization"
                  defaultChecked
                />
                <label htmlFor="organization" className="radio_spc">
                  Organization
                </label>
                <input
                  type="radio"
                  id="individual"
                  name="account_type"
                  defaultValue="individual"
                  className="radio_spc"
                />
                <label htmlFor="individual">Individual</label>
              </div>
              <div style={{ textAlign: "center" }}>
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
                  <a href="#" className="texthover" id="user_agreement">
                    User Agreement,
                  </a>
                </b>{" "}
                <b>
                  <a href="#" className="texthover" id="privacy_policy">
                    Privacy Policy
                  </a>
                </b>{" "}
                and{" "}
                <b>
                  <a href="#" className="texthover" id="cookie_policy">
                    Cookie Policy.
                  </a>
                </b>
              </div>
              <b></b>
            </form>
          </div>
          <b></b>
        </div>
        <b></b>
      </div>

      <script type="text/javascript" src="/js/a.js"></script>
    </>
  );
};

export default Signup;
