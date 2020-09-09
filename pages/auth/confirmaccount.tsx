import Button from "react-bootstrap/Button";
// import Link from "next/link";
import { useState, FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";
// import AuthHeader from "../../components/auth/AuthHeader";
import Head from "next/head";

const ConfirmAccount = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [countDown, setCountDown] = useState(60);

  const code2Ref = useRef(null);
  const code3Ref = useRef(null);
  const code4Ref = useRef(null);
  const submitBtnRef = useRef(null);

  const router = useRouter();

  const handleClose = () => setShow(false);

  // const autotab = (current, to) => {
  //   if (
  //     current.getAttribute &&
  //     current.value.length == current.getAttribute("maxlength")
  //   ) {
  //     to.focus();
  //   }
  // };

  function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;

    function tick() {
      //This script expects an element with an ID = "counter". You can change that to what ever you want.

      var current_minutes = mins - 1;
      seconds--;
      const cnt: any =
        current_minutes.toString() +
        ":" +
        (seconds < 10 ? "0" : "") +
        String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else if (mins > 1) {
        countdown(mins - 1);
      }
      setCountDown(cnt);
    }
    tick();
  }

  const callPrompt = (
    title: string,
    link: string,
    link_text: string,
    message: string
  ) => {
    if (show) setShow(false);
    setShow(true);
    setPromptTitle(title);
    setLinkText(link_text);
    setLinkTo(link);
    setPromptBody(message);
  };

  const submitCode = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const rs: any = await axios.post(
        "http://51.116.114.155:8080/auth/keyinput/",
        {
          integer_key: parseInt(`${code1}${code2}${code3}${code4}`),
        }
      );
      console.log(rs);
      callPrompt(
        "Verification",
        "/auth/login",
        "Login",
        "Verification successful"
      );
    } catch (e) {
      console.log(e);
      callPrompt("Verification", "", "Close", "Verification failed");
    }
  };

  useEffect(() => {
    if (countDown == 60) countdown(1);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Account Verification</title>
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

        <link rel="stylesheet" href="/account_verification.css" />
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
              <h3>
                <b>
                  Enter code for
                  <br />
                  verification
                </b>
              </h3>
            </div>
            <br />
          </div>
          <div className="row">
            <form onSubmit={submitCode}>
              <div className="form-group" style={{ textAlign: "center" }}>
                <div id="form">
                  <input
                    type="text"
                    className="codebox"
                    id="code1"
                    maxLength={1}
                    size={1}
                    min={0}
                    max={9}
                    pattern="[0-9]{1}"
                    value={code1}
                    onChange={(e) => setCode1(e.target.value)}
                    onKeyUp={() => code2Ref.current.focus()}
                    style={{
                      textAlign: "center",
                    }}
                  />
                  <input
                    type="text"
                    className="codebox"
                    id="code2"
                    maxLength={1}
                    size={1}
                    min={0}
                    max={9}
                    pattern="[0-9]{1}"
                    value={code2}
                    onChange={(e) => setCode2(e.target.value)}
                    style={{
                      textAlign: "center",
                    }}
                    ref={code2Ref}
                    onKeyUp={() => code3Ref.current.focus()}
                  />
                  <input
                    type="text"
                    className="codebox"
                    id="code3"
                    maxLength={1}
                    size={1}
                    min={0}
                    max={9}
                    pattern="[0-9]{1}"
                    value={code3}
                    onChange={(e) => setCode3(e.target.value)}
                    style={{
                      textAlign: "center",
                    }}
                    ref={code3Ref}
                    onKeyUp={() => code4Ref.current.focus()}
                  />
                  <input
                    type="text"
                    className="codebox"
                    id="code4"
                    maxLength={1}
                    size={1}
                    min={0}
                    max={9}
                    pattern="[0-9]{1}"
                    value={code4}
                    onChange={(e) => setCode4(e.target.value)}
                    style={{
                      textAlign: "center",
                    }}
                    ref={code4Ref}
                    onKeyUp={() => submitBtnRef.current.focus()}
                  />
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="continue"
                    ref={submitBtnRef}
                  >
                    Continue
                  </button>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                  If you don't recieve the code within
                  <br />
                  1mins, click below to re-send it.
                </div>
                <div style={{ marginTop: 15 }}>
                  <button className="re-sendbtn" id="re-send_code">
                    Resend Code<i className="material-icons">refresh</i>
                  </button>
                  {countDown}
                </div>
                {/* <table className="cell" style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "75%" }}>
                        <button className="re-sendbtn" id="re-send_code">
                          Resend Code<i className="material-icons">refresh</i>
                        </button>
                      </td>
                      <td style={{ textAlign: "start" }} id="counter">
                        {" "}
                        {countDown}
                      </td>
                    </tr>
                  </tbody>
                </table> */}
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
      <script src="/assets/js/jquery-3.4.1.min.js"></script>
      <script src="/assets/js/popper.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
    </>
  );
};

export default ConfirmAccount;
