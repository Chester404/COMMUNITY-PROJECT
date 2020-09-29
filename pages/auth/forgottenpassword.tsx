import React from "react";
import MainLayout from "../../components/MainLayout";
import { useState, useEffect } from "react";

function forgottenpassword() {
  const [authentication_property, setAuthenticationProperty] = useState("");

  return (
    <MainLayout>
      <div className="logincontent">
        <div className="forgotborder">
          <h3>
            <b>Find Your Account</b>
          </h3>
          <br />
        </div>

        <form
          className="needs-validation"
          noValidate
          // onSubmit={authenticate}
        >
          <div className="form-group">
            <label htmlFor="InputFindEmail" className="bolder">
              Email
            </label>
            <input
              type="email"
              className="form-control form-rounded"
              id="InputFindEmail"
              placeholder="Please enter a valid email"
              // value=""
              onChange={(e) => setAuthenticationProperty(e.target.value)}
            />
          </div>

          <div className="center">
            <button
              type="submit"
              id="findAccount_button"
              className="btn btn-primary btn-block authbtn"
            >
              Continue
            </button>
          </div>
          <br />
        </form>
      </div>
    </MainLayout>
  );
}

export default forgottenpassword;
