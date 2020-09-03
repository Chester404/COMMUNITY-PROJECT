import Layout from "../../components/Layout";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState, createRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";

const ConfirmAccount = () => {
  const [code, setCode] = useState("");
  const myRef = createRef;
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [promptBody, setPromptBody] = useState("");
  const [linkTo, setLinkTo] = useState(null);
  const [linkText, setLinkText] = useState(null);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const autotab = (current, to) => {
    if (
      current.getAttribute &&
      current.value.length == current.getAttribute("maxlength")
    ) {
      to.focus();
    }
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
      setPromptBody("Verification successful");
      setLinkTo("login");
      setLinkText("Login");
      setShow(true);
    } catch (e) {
      console.log(e);
      setPromptBody("Verification failed");
      setLinkTo("login");
      setLinkText("");
      setShow(true);
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
          title="Verification"
          linkTo={linkTo}
          linkText={linkText}
          show={show}
          handleClose={handleClose}
        >
          <p>{promptBody}</p>
        </Prompt>
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
      </Layout>
    </>
  );
};

export default ConfirmAccount;
