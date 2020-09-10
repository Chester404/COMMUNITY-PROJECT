import MainLayout from "../components/MainLayout";
// import Link from "next/link";
import { Users } from "../lib/endpoints";
import { useState, FormEvent } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
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
  const [statusMsg, setStatusMsg] = useState("");
  const [statusColor, setStatusColor] = useState("blue");
  const submitData = async (e: FormEvent) => {
    e.preventDefault();

    const response = await new Users().updateUserProfile({
      name: name,
      last_name: last_name,
      birthday: birthday,
      gender: gender,
      street_address: street_address,
      region: region,
      gps_location: gps_location,
      privacy_level: privacy_level,
    });
    console.log(response);
    if (!response.error) {
      //Do whatever
      setStatusColor("red");
      setStatusMsg("Some error occurred");
      return;
    }
    setStatusColor("blue");
    setStatusMsg("Updated");
    //process when succesfull
  };

  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header mt-6">
            <h1 className="page-title ">Profile</h1>
          </div>
          {/* End page-header */}
          <div className="row ">
            <div className="col-md-3 ">
              <div className="userpic mb-4">
                <img
                  src="assets/images/img.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center">
                <a
                  href="editprofile"
                  className="btn btn-primary btn-block mt-1"
                  style={{ borderRadius: "12px", width: "200px" }}
                >
                  Edit Information
                </a>
                <br />
              </div>
            </div>
            <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12">
              {/* <div className="card-body"> */}
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-label">Date of Birth</label>
                    <div className="form-group">
                      <div className="input-group-date">
                        <input
                          type="text"
                          id="dob"
                          className="form-control form-rounded"
                          defaultValue=""
                          readOnly
                          onKeyPress
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Private Level</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Town</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Region</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Digital Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue=""
                      readOnly
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
