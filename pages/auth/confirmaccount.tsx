import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Auth } from "../../lib/endpoints";
import { route } from "next/dist/next-server/server/router";
import ReactInputVerificationCode from "react-input-verification-code";
import axios from "axios";

const Loader = () => (
  <span
    className="spinner-border spinner-border-sm"
    role="status"
    aria-hidden="true"
    style={{ width: "1.5rem", height: "1.5rem" }}
  ></span>
);

const ConfirmAccount = () => {
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
  const [integer_key, setIntegerKey] = useState(null);

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatusColor("blue");
    setStatus("Please wait...");
    try {
      const result = await new Auth().confirmaccount(integer_key);
      if (result.status === 200) {
        setLoading(false);
        console.log("RESULT:", result);
        setStatusColor("blue");
        setStatus("Activation successfull. You can now login");

        setTimeout(() => {
          // go to landing page
          window.localStorage.setItem(
            "cp-activation",
            JSON.stringify(result.data)
          );
          router.push("/auth/login");
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
        setStatus("Please re-enter your PIN and try again.");

        // setPromptBody("Please check your credentials and try again.");
        // setLinkTo("signup");
        // setLinkText("Signup");
        // setShow(true);
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
              <b>Enter code for verification.</b>
            </h3>
          </div>

          <ReactInputVerificationCode onChange={(e) => setIntegerKey(e)} />
        </div>
        <br />
        <div>
          <button
            type="button"
            className="btn btn-primary btn-block submitbutton"
            id="submitButton"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        <br />
        <div className="text-center">
          If you don't receive the code within 1 minute, tap below to resend it
          <br />
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-primary"
                id="resendCode"
              >
                Resend Code
              </button>
            </div>
            <div className="col-6">0.46</div>
          </div>
          <div
            style={{
              textAlign: "center",
              color: statusColor,
            }}
          >
            &nbsp;{status}
          </div>
        </div>{" "}
      </Layout>
    </>
  );
};

export default ConfirmAccount;
