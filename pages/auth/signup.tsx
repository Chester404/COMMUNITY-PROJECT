import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
// import styles from "./styles.module.css";
import emailValidation from "../../utils/emailValidation";
import phoneValidation from "../../utils/phoneValidation";
import axios from "axios";
import { useState } from "react";
import Prompt from "../../components/Prompt";

const Signup = () => {
  let data: any;
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [emailValidity, setEmailValidity] = useState("invalid");
  // const [phoneValidity, setPhoneValidity] = useState("invalid");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("mismatch");
  const [passwordFieldValidity, setPasswordFieldValidity] = useState("invalid");
  const [userType, setUserType] = useState("Individual");
  const [isSent, setIsSent] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [show, setShow] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [promptBody, setPromptBody] = useState("");
  const [linkTo, setLinkTo] = useState(null);
  const [linkText, setLinkText] = useState(null);
  const [promptTitle, setPromptTitle] = useState("");
  const [is_organization, setIsOrganization] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Toggle Password Visibility
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const loader = () => (
    <span
      className="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
      style={{ width: "1.5rem", height: "1.5rem" }}
    ></span>
  );

  // Email Phone Validation
  const validateEmail = (e) => {
    if (emailValidation(e.target.value)) {
      setEmail(e.target.value);
      setEmailValidity("valid");
    } else {
      setEmailValidity("invalid");
    }
  };

  // const validatePhone = (e) => {
  //   if (phoneValidation(e.target.value)) {
  //     setPhoneNumber(e.target.value);
  //     setPhoneValidity("valid");
  //   } else {
  //     setPhoneValidity("invalid");
  //   }
  // };

  // Password Validation
  // function allLetter(inputtxt) {
  //   var letters = /^[A-Za-z]+$/;
  //   if (inputtxt.value.match(letters)) {
  //     alert("Your name have accepted : you can try another");
  //     return true;
  //   } else {
  //     alert("Please input alphabet characters only");
  //     return false;
  //   }
  // }

  const validatePassword = (e) => {
    console.log(confirmPassword, password);
    const r = e.target.value;
    let tr = true;
    let letters = /^[A-Za-z]+$/;
    if (!e.target.value.match(letters) && !e.target.value.match(/[A-Z]/g)) {
      setPasswordFieldValidity("invalid");
      return;
    }
    // if (!e.target.value.match(/[A-Z]/g)) {
    //   setPasswordFieldValidity("invalid");
    //   return;
    // }
    // if (!e.target.value.match(/[0-9]/g)) {
    //   setPasswordFieldValidity("invalid");
    //   return;
    // }
    // if (!e.target.value.match(/[^a-zA-Z\d]/g)) {
    //   setPasswordFieldValidity("invalid");
    //   return;
    // }
    // if (!e.target.value.length >= 8) {
    //   setPasswordFieldValidity("invalid");
    //   return;
    // }

    setPassword(e.target.value);
    setPasswordFieldValidity("valid");
    // if (
    //   e.target.value.match(/[a-z]/g)  &&
    //   e.target.value.match(/[A-Z]/g) &&
    //   e.target.value.match(/[0-9]/g) &&
    //   e.target.value.match(/[^a-zA-Z\d]/g) &&
    //   e.target.value.length >= 8
    // ) {
    //   // res = "TRUE";
    //   setPassword(e.target.value);
    //   setPasswordFieldValidity("valid");
    // } else {
    //   // console.log("invalid password")
    //   setPasswordFieldValidity("invalid");
    // }
  };

  const confirmPasswordMatch = (e) => {
    if (e.target.value === password) {
      setConfirmPassword("match");
      // data.first_name = firstName
      // data.last_name = lastName
      // data.email = email
      // data.password = password
      // data.phone_number = phoneNumber
      // data.user_type = userType
    } else {
      setConfirmPassword("mismatch");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setPromptTitle("Error");
      setShow(true);
      setPromptBody("Invalid data input.");
      event.stopPropagation();
      return;
    }
    console.log("Here");
    if (email && password && confirmPassword === "match") {
      setLoading(true);
      try {
        const result = await axios.post(
          "http://51.116.114.155:8080/auth/registration/",
          {
            email: email,
            password: password,
            is_organization: is_organization,
          }
        );

        if (result) {
          setLoading(false);
          console.log("RESULT:", result);
          if (result.status === 200 || result.statusText === "Created") {
            // go to landing page
            setPromptBody(
              "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
            );
            setLinkTo("confirmaccount");
            setLinkText("Confirm Account");
            setShow(true);
            setLoading(false);
          }
        }
      } catch (err) {
        console.log(err.message);
        if (err.message === "Request failed with status code 400") {
          setPromptBody("User with this email already exists");
          setLinkText(null);
          setLinkTo(null);
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
    } else {
      setPromptTitle("Password");
      setShow(true);
      setPromptBody("Invalid data input. Passwords mismatch");
    }
  };

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" type="text/css" href="/auth.css" />
      </Head>
      <Prompt
        // body={`A confirmation has been sent to your email. Please retrieve the code and
        // confirm acount`}
        title={promptTitle}
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
        }}
      >
        <div>
          <img src="/images/Logo.png" />
        </div>
        <div>
          <b>Make the most out of your business</b>
        </div>
        <div>
          Already on Market Circle?{" "}
          <Link href="/auth/login">
            <a>
              <b>Log in</b>
            </a>
          </Link>
        </div>
      </div>{" "}
      <div className="row">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ width: "100%", padding: 40 }}
        >
          {/* <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              id="signup_firstname"
              className="form-control"
              placeholder="Please enter your first name..."
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              id="signup_lastname"
              className="form-control"
              placeholder="Please enter your last name..."
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              id="signup_email"
              className="form-control"
              placeholder="Please enter a valid email.."
              required
              defaultValue={email}
              onChange={validateEmail}
            />
            <small id="emailHelp" className="form-text text-muted">
              {emailValidity}
            </small>
            <div className="invalid-feedback">Please enter valid email.</div>
          </div>
          {/* <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              id="signup_phonenumber"
              className="form-control"
              placeholder="Please enter your phone number"
              defaultValue={phoneNumber}
              onChange={validatePhone}
            />
            <small id="phoneHelp" className="form-text text-muted">
              {phoneValidity}
            </small>
          </div> */}
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              id="signup_password"
              type={passwordShown ? "text" : "password"}
              placeholder="Password must be atleast 8 characters long."
              required
              defaultValue={password}
              onChange={validatePassword}
            />
            <i onClick={togglePasswordVisiblity}>{eye}</i>
            <small id="emailHelp" className="form-text text-muted">
              {passwordFieldValidity}
            </small>
            {/* <Form.Control.Feedback type="invalid">
                  Please enter a valid password.
                </Form.Control.Feedback> */}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              id="signup_confirm_password"
              className="form-control"
              type="password"
              placeholder="Password must be atleast 8 characters long."
              required
              // defaultValue={confirmPassword}
              onChange={confirmPasswordMatch}
            />
            <small id="emailHelp" className="form-text text-muted">
              {confirmPassword}
            </small>
          </div>

          <div className="mb-3 text-center">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inline-radio-1"
                name="radioButton"
                // checked={userType === "Organization"}
                value="Organization"
                onChange={(e) => setUserType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inline-radio-1">
                Organization
              </label>
            </div>
            {/* custom-control custom-radio custom-control-inline */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inline-radio-2"
                name="radioButton"
                checked={userType === "Individual"}
                value="Individual"
                onChange={(e) => setUserType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inline-radio-2">
                Individual
              </label>
            </div>
          </div>
          <button
            id="signup_button"
            className="btn btn-primary btn-lg btn-block"
            type="submit"
          >
            {loading ? loader() : null}
            Signup
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default Signup;
