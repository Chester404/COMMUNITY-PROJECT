import MainLayout from "../../components/MainLayout";
import { Accordion, Card } from "react-bootstrap";
import AccountPasswordPopup from "../../components/auth/AccountPasswordPopup";
import { useState, FormEvent } from "react";
import { Users, Auth } from "../../lib/endpoints";
import Prompt from "../../components/Prompt";

const Acount = () => {
  const [isemail, setIsEmail] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [doneUpdate, setDoneUpdate] = useState(false);
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmnewpassword, setConfirmNewPassword] = useState("");

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

  const submitChangeEmail = async () => {
    callPrompt("Change Email", "", "", "Please wait...");

    const response = await new Users().changeEmail({
      email: isemail,
    });
    setDoneUpdate(true);
    callPrompt("Edit Profile", "", "Close", "Success: User profile saved");
  };

  const submitChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    callPrompt("Change Password", "", "", "Please wait...");
    const result = await auth_api.changePassword(
      password,
      newpassword,
      confirmnewpassword
    );
    if (result.new_password) {
      callPrompt(
        "Change Password",
        "",
        "Close",
        "Both fields can not ne blank"
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
    }
    if (result.password) {
      callPrompt("Change Password", "", "Close", result.password);
      return;
    }
    console.log("Changing password", result);
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
                    <form>
                      <div className="row form-group account-email-body">
                        <label className="pr-2 mt-2">
                          <strong>Email Address</strong>
                        </label>
                        <input
                          type="text"
                          id="account-input-mail"
                          className="form-control form-rounded mail-pass-input"
                          placeholder="loisewurama@yahoo.com"
                          onChange={(e) => setIsEmail(e.target.value)}
                        ></input>
                      </div>
                      <div className="row account-email-body-buttons pl-9  mb-2">
                        <AccountPasswordPopup />
                        <button
                          className="btn btn-primary mail-pass-buttons"
                          id="account-mail-cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
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
                    <form onSubmit={submitChangePassword}>
                      <div className="row form-group account-email-body">
                        <label className="pr-3 mt-2">
                          <strong>Current Password</strong>
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="form-control form-rounded mail-pass-input"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        ></input>
                      </div>
                      <div className="row form-group account-email-body">
                        <label className="pr-6 mt-2">
                          <strong>New Password</strong>
                        </label>
                        <input
                          id="newpassword"
                          type="password"
                          className="form-control form-rounded mail-pass-input"
                          placeholder="Password must be atleast 8 characters"
                          value={newpassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        ></input>
                      </div>
                      <div className="row form-group account-email-body">
                        <label className="pr-2 mt-2">
                          <strong>Confirm Password</strong>
                        </label>
                        <input
                          id="confirmnewpassword"
                          type="password"
                          className="form-control form-rounded mail-pass-input"
                          placeholder="Re-enter the same password as above"
                          value={confirmnewpassword}
                          onChange={(e) =>
                            setConfirmNewPassword(e.target.value)
                          }
                        ></input>
                      </div>
                      {/* <div className="row account-email-body mt-5">
                        <div>
                          <a
                            href="/auth/forgottenpassword"
                            className="texthover account-forgot"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div> */}
                      {/*Buttons for saving of password starts here*/}

                      <div className="row account-email-body-buttons pl-9 mt-5  mb-2">
                        <button
                          id="account-pass-save"
                          className="btn btn-primary pass-buttons mr-1 mb-2 "
                        >
                          Save
                        </button>
                        <button
                          id="account-pass-cancel"
                          className="btn btn-primary pass-buttons mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                      {/*Buttons for saving of password ends here*/}
                    </form>
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
