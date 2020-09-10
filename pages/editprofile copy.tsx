import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useState, FormEvent, useEffect, useContext } from "react";
import Link from "next/link";
import Prompt from "../components/Prompt";
import { Store } from "../contextStore";

const REGIONS = [
  ["wr", "Western Region"],
  ["as", "Ashanti"],
  ["ba", "Brong Ahafo Region"],
  ["be", "Bono-East Region"],
  ["ah", "Ahafo Region"],
  ["cr", "Central Region"],
  ["er", "Eastern Region"],
  ["gr", "Greater Accra Region"],
  ["nr", "Northern Region"],
  ["sa", "Savannah Region"],
  ["ne", "North East Region"],
  ["ue", "Upper East Region"],
  ["uw", "Upper West Region"],
  ["ot", "Oti Region"],
  ["wn", "Western-North Region"],
];
const PRIVACY = [
  ["me", "Me"],
  ["or", "Registered Organisation Only"],
  ["orc", "Registered Organisation and Community members"],
];

export default function Home() {
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  // const [reg_dat, setRegDate] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("wr");
  const [digital_address, setDigitalAddress] = useState("");
  const [privacy_level, setPrivacyLevel] = useState("me");
  // const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  // const [user_id, setUser] = useState("");
  // const [statusMsg, setStatusMsg] = useState("");
  // const [statusColor, setStatusColor] = useState("blue");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");

  const { state, dispatch } = useContext(Store);
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

  const submitData = async () => {
    callPrompt("Edit Profile", "", "", "Please wait...");
    const [first, ...last] = name.split(" ");
    const response = await new Users().updateUserProfile({
      name: name,
      first_name: first,
      last_name: last.join(" "),
      birthday: birthday,
      gender: gender,
      street_address: street_address,
      phone_number: phone_number,
      region: region,
      digital_address: digital_address,
      privacy_level: privacy_level,
    });
    console.log("RESPONSE ON PUSH", response);
    setShow(false);
    if (response.error) {
      callPrompt("Edit Profile", "", "Close", "An error occured");
      //Do whatever
      // setStatusColor("red");
      // setStatusMsg("Some error occurred");
      return;
    }

    dispatch({
      type: "UPDATE_USERNAME",
      payload: name,
    });
    let lStorage: any = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    if (lStorage) {
      lStorage.username = name;
      window.localStorage.setItem("cp-a", JSON.stringify(lStorage));
    }
    callPrompt("Edit Profile", "", "Close", "Success: User profile saved");
  };

  useEffect(() => {
    (async () => {
      const rs = await new Users().getUserProfile();
      setName(rs.name);
      setBirthDay(rs.birthday);
      setGender(rs.gender ? rs.gender : "m");
      setStreetAddress(rs.street_address);
      setPhoneNumber(rs.phone_number);
      setRegion(rs.region ? rs.region : "wr");
      setDigitalAddress(rs.digital_address);
      setPrivacyLevel(rs.privacy_level ? rs.privacy_level : "me");
      setEmail(rs.user.email);
      console.log("rsData", rs.user);
    })();
  }, []);

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
          {prompt_body}
        </Prompt>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Edit Information</h1>
          </div>
          {/* End page-header */}
          <div className="row">
            <div className="col-md-3">
              <div className="userpic mb-4">
                <div className="profile-pic">
                  <img
                    src="assets/images/Profile_Icon.png"
                    width={200}
                    height={200}
                  />
                  <div
                    className="edit"
                    style={{
                      marginTop: "40% !important",
                      marginRight: "35% !important",
                    }}
                  >
                    <a href="#">
                      <button
                        type="button"
                        className="btn btn-icon"
                        style={{
                          background: "#443F4F !important",
                          color: "#ffffff !important",
                          borderRadius: "50%",
                        }}
                      >
                        <i
                          className="fe fe-edit-2 fa-lg"
                          style={{ fontSize: "25px" }}
                        />
                      </button>
                      {/* <button
                        type="button"
                        className="btn btn-icon ml-2"
                        style={{
                          background: "#443F4F !important",
                          color: "#ffffff !important",
                          borderRadius: "50%",
                        }}
                      >
                        <i
                          className="fe fe-trash fa-lg"
                          style={{ fontSize: "25px" }}
                        />
                      </button> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12">
              {/* <div className="card-body editprofile_cardbody"> */}
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="Lois Young"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "grey", fontFamily: "" }}>
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="your@email.com"
                      value={email}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="024 678 9560"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-label">Date of Birth</label>
                    <div className="form-group">
                      <div className="input-group-date">
                        <input
                          type="date"
                          id="dob"
                          className="form-control form-rounded"
                          defaultValue="30/12/2020"
                          value={birthday}
                          onChange={(e) => setBirthDay(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Private Level</label>
                    <select
                      className="form-control select2 form-rounded"
                      value={privacy_level}
                      onChange={(e) => setPrivacyLevel(e.target.value)}
                    >
                      {PRIVACY.map((p) => (
                        <option key={p[0]} value={p[0]}>
                          {p[1]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group mt-4">
                    <label htmlFor="exampleInput">Gender</label>
                    <div className="row" style={{ marginLeft: 3 }}>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="m"
                          checked={gender == "m" ? true : false}
                          onChange={(e) => setGender(e.target.value)}
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
                          value="f"
                          checked={gender == "f" ? true : false}
                          onChange={(e) => setGender(e.target.value)}
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

                  <div className="form-group">
                    <label>Street Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="Executive Avenue Anaji"
                      value={street_address}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Region</label>
                    <select
                      className="form-control select2 form-rounded"
                      onChange={(e) => setRegion(e.target.value)}
                      value={region}
                    >
                      {REGIONS.map((r, i) => (
                        <option key={i} value={r[0]}>
                          {r[1]}
                        </option>
                      ))}
                      {/* <option>Western Region</option>
                      <option>Central Region</option>
                      <option>Eastern Region</option>
                      <option>Greater Accra</option>
                      <option>Volta Region</option> */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Digital Address</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="eg. AK-039-5028"
                      value={digital_address}
                      onChange={(e) => setDigitalAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div
                className="btn-list"
                style={{ marginLeft: "30%", marginRight: "30%" }}
              >
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-lg mb-1 mt-5"
                    style={{
                      background: "#3964FC !important",
                      width: "160px !important",
                      color: "#ffffff !important",
                      borderRadius: "20px !important",
                    }}
                    onClick={submitData}
                  >
                    Save
                  </button>
                  <Link href="/profile">
                    <a
                      className="btn ml-5 btn-lg mb-1 mt-5"
                      style={{
                        background: "#818AA9 !important",
                        width: "160px !important",
                        color: "#ffffff !important",
                        borderRadius: "20px !important",
                      }}
                    >
                      Cancel
                    </a>
                  </Link>
                </div>
              </div>
              {/* </div> */}`
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
