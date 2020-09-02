import Layout from "../../components/Layout";

function Profile() {
  return (
    <Layout title={"Profile"}>
      <div className="container-fluid row profileContainer justify-content-center">
        <div className="col-md-12 page-tittle">
          <p>
            <h1>Edit Profile</h1>
          </p>
        </div>

        <div className="col-md-2">
          <img
            src="../images/profileImage1.png"
            width={150}
            height={150}
            alt="image"
            className="rounded float-right"
          />
        </div>

        <div className="col-md-8 row">
          <div className="col-md-6">
            <div className="col-md-12">
              <div className="row mt-2">
                <label htmlFor="exampleInput ">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lois"
                  required
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Young"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="loisewuramayoung@gmail.com"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+233 24 678 9560"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Date of Birth</label>
                <div className="form-group">
                  <div className="input-group-date" id="datetimepicker1">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="10 Aug 1993"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Gender</label>
                <div className="row" style={{ marginLeft: 3 }}>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="exampleInput">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Executive Avenue Anaji"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="exampleInput">Region</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Western Region</option>
                    <option>Central Region</option>
                    <option>Eastern Region</option>
                    <option>Greater Accra</option>
                    <option>Volta Region</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">GPS Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="43.21.31.N"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="exampleInput">Privacy Level</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Just me</option>
                    <option>Registered Organization Only</option>
                    <option>
                      Registered Organization and Community members
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-md-12 justify-content-center">
            <div className="row col-md-6 mt-4 ">
              <button type="submit" className="btn btn-primary mr-4 btnsave">
                Save
              </button>
              <button type="submit" className="btn btn-primary btncancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
