import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";
import AuthHeader from "../../components/auth/AuthHeader";

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

  const submitCode = async () => {
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
      callPrompt("Verification", "", "close", "Verification failed");
    }
  };

  return (
    <AuthHeader title="Verify Code">
      <style jsx>{`
        .container {
          margin: 0 auto;
          width: 30%;
          background: #ffffff;
          padding: 25px;
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
      <div className="row">
        <div className="navbar">
          <img className="logo" src="/images/Logo.png" />
        </div>
      </div>
      <Prompt
        title={prompt_title}
        linkTo={link_to}
        linkText={link_text}
        success={link_to.length > 0 ? true : false}
        show={show}
        handleClose={handleClose}
      >
        <p>{prompt_body}</p>
      </Prompt>
      <div className="container">
        <div className="wrapper" style={{ margin: "70px 0" }}>
          <div className="row" style={{ margin: "0 40px" }}>
            <div
              className="col-12"
              style={{
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: "bolder",
                  margin: 0,
                  padding: 0,
                }}
              >
                Enter code for
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: "bolder",
                  margin: 0,
                  padding: 0,
                }}
              >
                verification
              </div>
              <form
                name="confirmation_code"
                style={{ width: "100%", marginTop: 40 }}
              >
                <div>
                  <input
                    type="text"
                    maxLength={1}
                    size={1}
                    min="0"
                    max="9"
                    name="number_1"
                    pattern="[0-9]{1}"
                    style={{
                      margin: "20px 10px 30px 0px",
                      textAlign: "center",
                      fontSize: 24,
                    }}
                    className="verificationbox"
                    value={code1}
                    onChange={(e) => setCode1(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    maxLength={1}
                    size={1}
                    min="0"
                    max="9"
                    name="number_2"
                    pattern="[0-9]{1}"
                    style={{
                      margin: "20px 10px 30px 0px",
                      textAlign: "center",
                      fontSize: 24,
                    }}
                    className="verificationbox"
                    value={code2}
                    onChange={(e) => setCode2(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    maxLength={1}
                    size={1}
                    min="0"
                    max="9"
                    name="number_3"
                    pattern="[0-9]{1}"
                    style={{
                      margin: "20px 10px 30px 0px",
                      textAlign: "center",
                      fontSize: 24,
                    }}
                    className="verificationbox"
                    value={code3}
                    onChange={(e) => setCode3(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    maxLength={1}
                    size={1}
                    min="0"
                    max="9"
                    name="number_4"
                    pattern="[0-9]{1}"
                    style={{
                      margin: "20px 10px 30px 0px",
                      textAlign: "center",
                      fontSize: 24,
                    }}
                    className="verificationbox"
                    value={code4}
                    onChange={(e) => setCode4(e.target.value)}
                  ></input>
                </div>
              </form>
            </div>
            <Button
              variant="primary"
              type="submit"
              block
              size="lg"
              className="signup-btn"
              onClick={submitCode}
            >
              Continue
            </Button>
            <br />
            <div className="col-12 text-center mt-3">
              If you don't receive the code within 1 minute, tap below to resend
              it
              <br />
              <Link href="#">
                <a>Resend</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="/js/a.js"></script>
    </AuthHeader>
  );
};

export default ConfirmAccount;
