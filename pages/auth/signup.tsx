import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import emailValidation from "../../utils/emailValidation";
import phoneValidation from "../../utils/phoneValidation";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  let data: any;
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailValidity, setEmailValidity] = useState("invalid");
  const [phoneValidity, setPhoneValidity] = useState("invalid");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("mismatch");
  const [passwordFieldValidity, setPasswordFieldValidity] = useState("invalid");
  const [userType, setUserType] = useState("Organization");
  const [isSent, setIsSent] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [promptBody, setPromptBody] = useState("");
  // const [linkTo, setLinkTo] = useState(null);
  // const [linkText, setLinkText] = useState(null);
  const [statusColor, setStatusColor] = useState("blue");
  const [status, setStatus] = useState("");

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

  const validatePhone = (e) => {
    if (phoneValidation(e.target.value)) {
      setPhoneNumber(e.target.value);
      setPhoneValidity("valid");
    } else {
      setPhoneValidity("invalid");
    }
  };

  // Password Validation
  const validatePassword = (e) => {
    if (
      e.target.value.match(/[a-z]/g) &&
      e.target.value.match(/[A-Z]/g) &&
      e.target.value.match(/[0-9]/g) &&
      e.target.value.match(/[^a-zA-Z\d]/g) &&
      e.target.value.length >= 8
    ) {
      // res = "TRUE";
      setPassword(e.target.value);
      setPasswordFieldValidity("valid");
    }
    // return true
    // set field to invalid
    else {
      // console.log("invalid password")
      setPasswordFieldValidity("invalid");
    }
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
    //   setLoading(true);
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // }

    if (email && password === confirmPassword) {
      setStatusColor("blue");
      setStatus("Please wait...");
      try {
        const result = await axios.post(
          "http://51.116.114.155:8080/auth/registration/",
          {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
          }
        );

        if (result) {
          // setLoading(false);
          console.log("RESULT:", result);
          if (result.status === 200 || result.statusText === "Created") {
            // go to landing page
            setStatusColor("blue");
            setStatus(
              "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
            );
            //   setPromptBody(
            //     "A confirmation has been sent to your email. Please retrieve the code and confirm acount"
            //   );
            //   setLinkTo("confirmaccount");
            //   setLinkText("Confirm Account");
            //   setShow(true);
            //   setLoading(false);
          }
        }
      } catch (err) {
        console.log(err.message);
        if (err.message === "Request failed with status code 400") {
          // setPromptBody("User with this email already exists");
          // setLinkText(null);
          // setLinkTo(null);
          // setShow(true);
          // setLoading(false);
          setStatusColor("red");
          setStatus("User with this email already exists");
        } else if (err.message === "Request failed with status code 404") {
          // bad endpoint
          setStatusColor("red");
          setStatus("An error occured");
        } else if (err.message === "Network Error") {
          setStatusColor("red");
          setStatus("Please check your network connection and try again.");
          // bad network connection
          // setPromptBody(
          //   "Please check your network connection and try again."
          // );
          // setShow(true);
          // setLoading(false);
        }
      }
    } else {
      setStatusColor("red");
      setStatus("Password mismatch");
    }
  };

  return (
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
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          {/* <div className="form-group col-12">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control cinput"
              id="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control cinput"
              id="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div> */}
          {/* <div className="form-group col-12">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              className="form-control cinput"
              id="phone_number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div> */}
          <div className="form-group col-12">
            <label htmlFor="email">Email address / Phone</label>
            <input
              type="email"
              className="form-control cinput"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="password">Password</label>
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
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className="form-control cinput"
              id="confirm_password"
              placeholder="Password"
              data-toggle="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <input
              type="radio"
              id="organization"
              name="account_type"
              value="organization"
            />{" "}
            <label htmlFor="organization">Organization</label>{" "}
            <input
              type="radio"
              id="individual"
              name="account_type"
              value="individual"
            />{" "}
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="form-group col-12">
            <button
              type="submit"
              className="btn btn-primary btn-block submitbutton"
            >
              Sign Up
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
          <div
            style={{
              textAlign: "center",
            }}
          >
            By clicking Sing up, you agree to the Market Circle
            <br />
            <b>
              <a href="">User Agreement,</a>
              <a href="">Privacy Policy</a>
            </b>{" "}
            and{" "}
            <b>
              <a href="">Cookie Policy</a>
            </b>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
