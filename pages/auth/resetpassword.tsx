import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../../components/MainLayout";

function resetpassword() {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [togglenewpasswordeye, setTogglePasswordeye] = useState(false);
  const [toggleconfirmnewpasswordeye, setToggleConfirmPasswordeye] = useState(
    false
  );

  return (
    <div>
      <MainLayout>
        <div className="logincontent">
          <div className="resetborder">
            <h3>
              <b>Reset Password</b>
            </h3>
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="InputPassword1" className="bolder">
              New Password
            </label>
            <div className="input-group hasiconborder">
              <input
                type={togglenewpasswordeye ? "text" : "password"}
                className="form-control hasicon"
                id="newPassword"
                placeholder="Password must be at least 8 characters"
                data-toggle="password"
                /* value=""{password}*/
                /*onChange={(e) => setPassword(e.target.value)}*/
              />
              <div className="input-group-addon">
                <a href="#">
                  <i
                    className={`${
                      togglenewpasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                    }`}
                    onClick={() => setTogglePasswordeye(!togglenewpasswordeye)}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword1" className="bolder">
              Confirm Password
            </label>
            <div className="input-group hasiconborder">
              <input
                type={toggleconfirmnewpasswordeye ? "text" : "password"}
                className="form-control hasicon"
                id="confirmNewPassword"
                placeholder="Re-Enter the same password as above"
                data-toggle="password"
                /*value=""{confirm_password}*/
                /*onChange={(e) => setConfirmPassword(e.target.value)}*/
              />
              <div className="input-group-addon">
                <a href="#">
                  <i
                    className={`${
                      toggleconfirmnewpasswordeye
                        ? "fe fe-eye"
                        : "fe fe-eye-off"
                    }`}
                    onClick={() =>
                      setToggleConfirmPasswordeye(!toggleconfirmnewpasswordeye)
                    }
                  />
                </a>
              </div>
            </div>
          </div>

          {/* button to continue to email */}
          <div className="center">
            <a
              href="/auth/login"
              className="btn btn-primary btn-block authbtn"
              id="resetpassword_button"
            >
              Continue
            </a>
          </div>
          <br />
        </div>
      </MainLayout>
    </div>
  );
}

export default resetpassword;
