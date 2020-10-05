import MainLayout from "../../components/MainLayout";
import { Accordion, Card } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Users, Auth } from "../../lib/endpoints";
import Prompt from "../../components/Prompt";
import Link from "next/link";
import { Store } from "../../contextStore";

const Acount = () => {
  const [newEmail, setNewEmail] = useState("");
  const [mailpassword, setMailPassword] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmnewpassword, setConfirmNewPassword] = useState("");

  const [togglemailpasswordeye, setToggleMailPasswordeye] = useState(false);
  const [togglepasswordeye, setTogglePasswordeye] = useState(false);
  const [togglenewpasswordeye, setToggleNewPasswordeye] = useState(
    false
  );
  const [toggleconfirmpasswordeye, setToggleConfirmPasswordeye] = useState(
    false
  );


  const { dispatch } = useContext(Store);
  const auth_api = new Auth();

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

  const submitChangeEmail = async (e) => {
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)) {
      //email vaild
    } else {
      callPrompt(
        "Change Email",
        "",
        "Close",
        "Check E-mail: Please enter the correct email address"
      );
      return;
    }

    if (newEmail.length < 1) {
      callPrompt("Change Email", "", "Close", "New email field can not empty");
      return;
    }
    if (mailpassword.length < 1) {
      callPrompt("Change Email", "", "Close", "Password field can not empty");
      return;
    }
    const response = await new Users().changeEmail({
      email: newEmail,
      password: mailpassword,
    });

    
    if (response.password) {
      // bad credentials
      callPrompt("Change Email", "", "Close", "No active account found with the given credentials.");
      return;
    } else {
      callPrompt("Change Email", "", "Close", "User.");
    }
    if (response.email) {
      //
      callPrompt("Change Email", "", "Close", "Email changed successfully");

      setNewEmail("");
      setMailPassword("");
    }
  };

  const submitChangePassword = async (e) => {
    e.preventDefault();
    if (password.length < 1) {
      callPrompt(
        "Change Password",
        "",
        "Close",
        "Current password field can not be empty"
      );
      return;
    }
    if (newpassword.length < 1) {
      callPrompt(
        "Change Password",
        "",
        "Close",
        "New password field can not be empty"
      );
      return;
    }
    if (confirmnewpassword.length < 1) {
      callPrompt(
        "Change Password",
        "",
        "Close",
        "Confirm password field can not be empty"
      );
      return;
    }
    if (newpassword !== confirmnewpassword) {
      callPrompt("Change Password", "", "Close", "Password does not match");
      return;
    }
    //Not an optimized way of coding. But as a temporal fix
    // Validate lowercase letters
    // let lowerCaseLetters = /[a-z]/g;
    // if (!newpassword.match(lowerCaseLetters)) {
    //   callPrompt(
    //     "Sign Up",
    //     "",
    //     "Close",
    //     "Check Password: There should be at least one lowercase character"
    //   );
    //   return;
    // }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (!newpassword.match(upperCaseLetters)) {
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
    if (!newpassword.match(numbers)) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: There should be at least one numeric character"
      );
      return;
    }

    // Validate length
    if (newpassword.length < 8) {
      callPrompt(
        "Sign Up",
        "",
        "Close",
        "Check Password: Password should be eight or more characters long"
      );
      return;
    }
    const result = await auth_api.changePassword(
      password,
      newpassword,
      confirmnewpassword
    );

    /*  if (result.new_password) {
      callPrompt(
        "Change Password",
        "",
        "Close",
        "Fields can not be empty"
      );
      return;
    }
    if (result.new_password) {
      callPrompt("Change Password", "", "Close", result.new_password);
      return;
    }
    if (result.confirm_password) {
      callPrompt("Change Password", "", "Close", result.confirm_password);
      return;
	} */

    if (result.password) {
      callPrompt("Change Password", "", "Close", result.password);
      return;
    }
    console.log("Changing password", result);

    callPrompt("Change Password", "", "Close", "Password changed successfully");
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
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
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Account Settings</h1>
          </div>
          {/* end of  page-header */}

          {/* content for change email and password starts from here */}
          <div>
            <Accordion>
              {/*The card for changing of email*/}
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="email-toggle"
                  className="account-header"
                >
                  <div className="mt-3 mb-1">
                    <h4>
                      <strong>Change Email</strong>
                    </h4>
                    <p>Link your account to a new email address, click edit.</p>
                  </div>
                  <div>
                    <p id="account-edit-mail">
                      <strong> Edit</strong>
                    </p>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="email-toggle">
                  <Card.Body>
                    <div className="row form-group account-email-body">
                      <label className="pr-2 mt-2">
                        <strong>Email Address</strong>
                      </label>
                      <input
                        type="text"
                        id="account-input-mail"
                        className="form-control form-rounded mail-pass-input1"
                        placeholder="New email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="row form-group account-email-body">
                      <label className="pr-6 mt-2">
                        <strong>Password</strong>
                      </label>
                      <input
                        type={ togglemailpasswordeye ? "text" : "password"}
                        id="account-input-password"
                        className="form-control form-rounded mail-pass-input"
                        placeholder="Confirm password"
                        value={mailpassword}
                        onChange={(e) => setMailPassword(e.target.value)}
                      >

                      </input>
                      <div className="input-group-addon">
                        <a href="#">
                          <i
                            className={`${
                              togglemailpasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                            }`}
                            onClick={() => setToggleMailPasswordeye(!togglemailpasswordeye)}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row account-email-body-buttons pl-9  mb-2">
                      {/*  <AccountPasswordPopup /> */}
                      <button
                        className="btn btn-primary mail-pass-buttons"
                        id="account-mail-save"
                        onClick={submitChangeEmail}
                      >
                        Save
                      </button>
                    </div>
                    <div className="account-email-body">
                      <p className="pl-5">
                        <strong>Note:</strong> Your email address is linked to
                        your account. <br />
                        By changinging your email address, you can no longer log
                        in with your old email
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/*The card for changing of email ends here*/}

              {/*The card for changing of password starts here*/}
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="password-toggle"
                  className="account-header"
                >
                  <div className="mt-3 mb-1">
                    <h4>
                      <strong>Change Password</strong>
                    </h4>
                    <p>Keep your account secured, dont share password.</p>
                  </div>
                  <div>
                    <p id="account-edit-pass">
                      <strong> Edit</strong>
                    </p>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="password-toggle">
                  <Card.Body>
                    <div className="row form-group account-email-body">
                      <label className="pr-3 mt-2">
                        <strong>Current Password</strong>
                      </label>
                      <input
                        id="password"
                        type={togglepasswordeye ? "text" : "password"}
                        className="form-control form-rounded mail-pass-input"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      >
                      </input>
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
                    <div className="row form-group account-email-body">
                      <label className="pr-6 mt-2">
                        <strong>New Password</strong>
                      </label>
                      <input
                        id="newpassword"
                        type={ togglenewpasswordeye ? "text" : "password"}
                        className="form-control form-rounded mail-pass-input"
                        placeholder="Password must be atleast 8 characters"
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      ></input>
                      <div className="input-group-addon">
                        <a href="#">
                          <i
                            className={`${
                              togglenewpasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                            }`}
                            onClick={() => setToggleNewPasswordeye(!togglenewpasswordeye)}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row form-group account-email-body">
                      <label className="pr-2 mt-2">
                        <strong>Confirm Password</strong>
                      </label>
                      <input
                        id="confirmnewpassword"
                        type={ toggleconfirmpasswordeye ? "text" : "password"}
                        className="form-control form-rounded mail-pass-input"
                        placeholder="Re-enter the same password as above"
                        value={confirmnewpassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      ></input>
                      <div className="input-group-addon">
                        <a href="#">
                          <i
                            className={`${
                              toggleconfirmpasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                            }`}
                            onClick={() => setToggleConfirmPasswordeye(!toggleconfirmpasswordeye)}
                          />
                        </a>
                      </div>
                    </div>
                    {/*Buttons for saving of password starts here*/}

                    <div className="row account-email-body-buttons pl-9 mt-5  mb-2">
                      <button
                        type="submit"
                        id="account-pass-save"
                        className="btn btn-primary pass-buttons mr-1 mb-2 "
                        onClick={submitChangePassword}
                      >
                        Save
                      </button>
                    </div>
                    {/*Buttons for saving of password ends here*/}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/*The card for changing of password ends here*/}
            </Accordion>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Acount;
