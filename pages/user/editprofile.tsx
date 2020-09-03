import Layout from "../../components/Layout";
import Head from "next/head";
import { Auth } from "../../lib/endpoints";
import { useState, FormEvent } from "react";

function editprofile() {
  const [id, setId] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [reg_dat, setRegDate] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("");
  const [gps_location, setGpsLocation] = useState("");
  const [privacy_level, setPrivacyLevel] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [user_id, setUser] = useState("");

  const submitData = async (e: FormEvent) => {
    e.preventDefault();
    const rs = await new Auth().updateUserProfile({
      id: 1,
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
      gender: gender,
      street_address: street_address,
      region: region,
      gps_location: gps_location,
      privacy_level: privacy_level,
      image: image,
      user: user_id,
    });
    console.log(rs);
  };
  return (
    <Layout title={"edit Profile"}>
      <Head>
        <link rel="stylesheet" href="/css/profiles.css" />
      </Head>
      <div className="container-fluid row profileContainer justify-content-center">
        <div className="col-md-12 page-tittle justify-content-left">
          {/* <p> */}
          <h1>Edit Profile</h1>
          {/* </p> */}
        </div>

        <div className="col-md-2 justify-content-center">
          <img
            src="../images/profileImage1.png"
            width={150}
            height={150}
            alt="image"
            className="rounded float-right"
          />
        </div>

        <div className="col-md-8 row">
          <form className=" col form-group md-12" onSubmit={submitData}>
            <div className="row md-10">
              {/*from here*/}

              <div className="col-md-6">
                <div className="col-md-12">
                  <div className="row mt-2">
                    <label htmlFor="exampleInput ">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lois"
                      required
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <label htmlFor="exampleInput">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Young"
                      required
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <label htmlFor="exampleInput">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="loisewuramayoung@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <label htmlFor="exampleInput">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="024 678 9560"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                          value={reg_dat}
                          onChange={(e) => setRegDate(e.target.value)}
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
                          //   value={gender}
                          //   onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
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
                          //   value={gender}
                          //   onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
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
                    <label htmlFor="exampleInput">Digital Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="AK-039-5028"
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
                        <option>Registered Organizations Only</option>
                        <option>
                          Registered Organizations and Community members
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/*to here*/}
            </div>
            <div className="row md-2">
              {/* <div className="row col-md-12 justify-content-center"> */}
              <div className="row col-md-12 mt-4  justify-content-center">
                <div className="col-md-4 mr-2 mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary mr-4 btnsave"
                  >
                    Save
                  </button>
                </div>
                <div className="col-md-4 mt-2">
                  <button type="submit" className="btn btn-primary btncancel">
                    Cancel
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default editprofile;
