import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useState, FormEvent } from "react";

export default function Home() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [reg_dat, setRegDate] = useState("");
  const [street_address, setStreetAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
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
      birthday: birthday,
      gender: gender,
      street_address: street_address,
      phone_number:phone_number,
      region: region,
      digital_address: digital_address,
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
          <div className="page-header">
            <h1 className="page-title">Edit Information</h1>
          </div>
          {/* End page-header */}
          <div className="row">
            <div className="col-md-3">
              <div className="userpic mb-4">
                <div className="profile-pic">
                  <img src="assets/images/Profile_Icon.png"
                  width={200}
                  height={200} />
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
                      <button
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
                      </button>
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control form-rounded text-field-hover"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                      />
                    </div>                    
                    <div className="form-group">
                      <label style={{color:"grey", fontFamily:""}}>Email Address</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="your@email.com"
                        readOnly
                        value={email}
                        
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        className="form-control form-rounded"
                        placeholder="eg. 024 567 3456"                        
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
                          onChange={(e) =>  setBirthDay(e.target.value)}                         
                        />  
                      </div>
                                              
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Privacy Level</label>
                      <select className="form-control select2 form-rounded">
                      <option>Just me</option>
                        <option>Registered Organizations Only</option>
                        <option>
                          Registered Organizations and Community members
                        </option>
                      </select>
                    </div>
                    
                  </div>
                  
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 col-md-12">
                  <div className="form-group mt-4">
                  <label htmlFor="exampleInput">Gender</label>
                    <div className="row" style={{ marginLeft: 3 }}>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"                         
                          value={gender}
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
                          value={gender}
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
                      <select className="form-control select2 form-rounded">
                        <option>Western Region</option>
                        <option>Central Region</option>
                        <option>Eastern Region</option>
                        <option>Greater Accra</option>
                        <option>Volta Region</option>
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
                      className="btn bnt-hover  mb-1 mt-5"
                      style={{
                        background: "#3964FC !important",
                        width: "160px !important",
                        color: "#ffffff !important",
                        borderRadius: "10px !important",
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn  ml-5  mb-1 mt-5"
                      style={{
                        background: "#818AA9 !important",
                        width: "160px !important",                       
                        color: "#ffffff !important",
                        borderRadius: "10px !important",
                      }}
                    >
                      Cancel
                    </button>
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
