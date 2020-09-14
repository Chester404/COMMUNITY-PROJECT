import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Prompt from "../components/Prompt";
import { Store } from "../contextStore";
import { useRouter } from "next/router";
/* import moment from "moment"; */

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
  const [gps_location, setDigitalAddress] = useState("");
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
  const [userImage, setImage] = useState("/assets/images/Profile_Icon.png");
  const [tempImage, setTempImage] = useState("");
  const { state, dispatch } = useContext(Store);
  const [doneUpdate, setDoneUpdate] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [shouldUploadImage, setShouldUpalodImage] = useState(false);

  const triggerUpload = () => {
    fileRef.current!.click();
  };

  const router = useRouter();

  const handleClose = () => {
    if (doneUpdate) {
      router.push("/profile");
    }
    setShow(false);
  };

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
    if (name.length <= 0 || !/^([a-zA-Z0-9 _-]+)$/.test(name)) {
      callPrompt(
        "Edit Profile",
        "",
        "Close",
        "Invalid character in name field"
      );
      return;
    }

    let phoneno = /^\d{10}$/;
    if (
      !phone_number.match(phoneno) ||
      phone_number.length > 10 ||
      phone_number.length < 10
    ) {
      callPrompt("Edit Profile", "", "Close", "Invalid phone number");
      return;
    }

    const allowedYear = new Date(
      moment().subtract(10, "years").toString()
    ).getFullYear();
    const userYear = new Date(birthday).getFullYear();

    if (userYear > allowedYear) {
      callPrompt(
        "Edit Profile",
        "",
        "Close",
        "Date should be at least equal to or more than 10 years"
      );
      return;
    }

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
      gps_location: gps_location,
      privacy_level: privacy_level,
    });

    if (response.error) {
      callPrompt("Edit Profile", "", "Close", "An error occured");
    }

    if (shouldUploadImage) {
      callPrompt(
        "Edit Profile",
        "",
        "",
        "Profile updated. Uploading image ..."
      );
      const imgresponse: any = await saveImage();
      if (imgresponse.error) {
        callPrompt(
          "Edit Profile",
          "",
          "Close",
          "An error occured. Failed to update profile picture"
        );
        return;
      }
    }

    dispatch({
      type: "UPDATE_USERNAME",
      payload: name,
    });
    dispatch({
      type: "SET_IMAGE",
      payload: userImage,
    });

    let lStorage: any = window.localStorage.getItem("cp-a");
    lStorage = JSON.parse(lStorage);
    if (lStorage) {
      lStorage.username = name;
      lStorage.image = userImage;
      window.localStorage.setItem("cp-a", JSON.stringify(lStorage));
    }
    setDoneUpdate(true);
    callPrompt("Edit Profile", "", "Close", "Success: User profile saved");
  };

  useEffect(() => {
    (async () => {
      const rs = await new Users().getUserProfile();
      setName(rs.name);
      setBirthDay(rs.birthday ? rs.birthday : "1999-12-12");
      setGender(rs.gender ? rs.gender : "m");
      setStreetAddress(rs.street_address);
      setPhoneNumber(rs.phone_number);
      setRegion(rs.region ? rs.region : "wr");
      setDigitalAddress(rs.gps_location);
      setPrivacyLevel(rs.privacy_level ? rs.privacy_level : "me");
      setEmail(rs.user.email);
      if (rs.image) {
        setImage(rs.image);
      }
      console.log("rsData", rs);
    })();
  }, []);

  const saveImage = async () => {
    // const formData = new FormData();
    // formData.append("image", image);
    // const rs = await new Users().uplaodImage(formData);
    // console.log(rs);
    const lStorage: any = JSON.parse(window.localStorage.getItem("cp-a"));
    let myHeaders: any = new Headers();
    myHeaders.append("Authorization", "Bearer " + lStorage.access);

    var formdata = new FormData();
    formdata.append("image", tempImage);

    var requestOptions: any = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const rs = await fetch(
        "http://51.116.114.155:8080/accounts/image_upload/",
        requestOptions
      );
      return rs;
    } catch (e) {
      return { error: "Failed to updload image" };
    }
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
            <h1 className="page-title">Edit Information</h1>
          </div>
          {/* End page-header */}
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={(e: any) => {
              let reader: any = new FileReader();
              const file = e.target.files[0];
              if (file.size > 317395) {
                callPrompt("Edit Profile", "", "Close", "File size too big");
                return;
              }
              reader.onload = function (event: any) {
                setImage(event.target.result);
                setTempImage(file);
                setShouldUpalodImage(true);
              };
              reader.readAsDataURL(file);
            }}
            //setImage(e.target.files[0])}
            // onChange={(evt: any) => {
            //   var reader: any = new FileReader();
            //   // const files: any = Array.from(event.target.files);
            //   // reader.onload = async () => {
            //   //   setImage(reader.result);
            //   // };
            //   // reader.readAsDataURL(event.target.files[0]);
            //   reader.onload = function (event) {
            //     setImage(event.target.result);
            //   };
            //   reader.readAsDataURL(evt.target.files[0]);
            // }}
          />

          <div className="row">
            <div className="col-md-3">
              <div className="userpic mb-4">
                <div className="profile-pic">
                  <img
                    src={userImage}
                    width={200}
                    height={200}
                    style={{ borderRadius: "4px" }}
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
                        onClick={triggerUpload}
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
                <div className="col-lg-5 col-md-12">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>
                      Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded text-field-hover"
                      placeholder="Full name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "grey", fontWeight: "bold" }}>
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="your@email.com"
                      readOnly
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Phone Number</label>
                    <input
                      type="number"
                      className="form-control form-rounded"
                      placeholder="eg. 024 567 3456"
                      value={phone_number}
                      min={10}
                      max={10}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="form-label"
                      style={{ fontWeight: "bolder" }}
                    >
                      Date of Birth
                    </label>
                    <div className="form-group">
                      <div className="input-group-date">
                        <input
                          type="date"
                          id="dob"
                          className="form-control form-rounded"
                          value={birthday}
                          onChange={(e) => setBirthDay(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>
                      Privacy Level
                    </label>
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

                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-md-12">
                  <div className="form-group mt-4">
                    <label
                      style={{ fontWeight: "bolder" }}
                      htmlFor="exampleInput"
                    >
                      Gender
                    </label>
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
                          style={{ fontWeight: "bolder" }}
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
                          style={{ fontWeight: "bolder" }}
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Town</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="Executive Avenue Anaji"
                      value={street_address}
                      onChange={(e) => setStreetAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Region</label>
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
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>
                      Digital Address
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      placeholder="eg. AK-039-5028"
                      value={gps_location}
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
                    className="btn bnt-primary  mb-1 mt-5"
                    style={{
                      background: "#3964FC !important",
                      width: "160px !important",
                      color: "#ffffff !important",
                      borderRadius: "10px !important",
                    }}
                    onClick={() => submitData()}
                  >
                    Save
                  </button>
                  <Link href="/profile">
                    <a
                      className="btn  ml-5  mb-1 mt-5"
                      style={{
                        background: "#818AA9 !important",
                        width: "160px !important",
                        color: "#ffffff !important",
                        borderRadius: "10px !important",
                      }}
                    >
                      Cancel
                    </a>
                  </Link>
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
