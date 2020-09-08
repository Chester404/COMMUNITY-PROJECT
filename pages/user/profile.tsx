import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { Users } from "../../lib/endpoints";
import { useEffect, useState } from "react";

function Profile() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [user, setUser] = useState("");
  const api_users = new Users();

  const getUserProfile = async () => {
    const rs = await api_users.getUserProfile();
    if (rs.error) {
      return;
    }
    console.log(rs);
    setFirstName(rs.first_name);
    setLastname(rs.last_name);
    setUser(rs.user);
  };

  useEffect(() => {
    getUserProfile();
  });

  return (
    <Layout title={"Profile"}>
      <Head>
        <link rel="stylesheet" href="/css/profiles.css" />
      </Head>
      <div className="container-fluid row profileContainer justify-content-center">
        <div className="col-md-12 page-tittle justify-content-left">
          {/* <p> */}
          <h1>Profile</h1>
          {/* </p> */}
        </div>

        <div className="col-md-2">
          <div className="col-md-12 justify-content-center">
            <img
              src="../images/profileImage1.png"
              width={150}
              height={150}
              alt="image"
              className="rounded float-right"
            />
            {/* <div className="row col mt-4  justify-content-center"> */}
            <Link href="/user/editprofile">
              <button type="submit" className="btn btn-primary mt-4 btnedit">
                Edit Profile
              </button>
            </Link>
            {/* </div> */}
          </div>
        </div>

        <div className="col-md-8 row">
          <div className="col-md-6">
            <div className="col-md-12">
              <div className="row mt-2">
                <label htmlFor="exampleInput ">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lois Ewurama"
                  readOnly
                  required
                  value={firstname}
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
                  readOnly
                  value={lastname}
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
                  readOnly
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="+233 024 678 9560"
                  readOnly
                  value={user}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Date of Birth</label>
                <div className="form-group">
                  <div className="input-group-date" id="datetimepicker1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="10 Aug 1993"
                      readOnly
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Female"
                    readOnly
                  />
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
                  readOnly
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="exampleInput">Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Western Region"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="exampleInput">Digital Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="AK-039-5028"
                  readOnly
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="exampleInput">Privacy Level</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Registered businesses only"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
