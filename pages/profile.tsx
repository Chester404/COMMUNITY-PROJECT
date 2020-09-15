import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useState, useEffect, useContext } from "react";
// import Link from "next/link";
import { Store } from "../contextStore";

const REGIONS = [
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
  ["wr", "Western Region"],
  ["wn", "Western-North Region"],
];
const PRIVACY = [
  ["me", "Me"],
  ["or", "Registered Organisation Only"],
  ["orc", "Registered Organisation and Community members"],
];

export default function Home() {
  const [profileData, setProfileData] = useState<any>({});
  // const [statusMsg, setStatusMsg] = useState("");
  // const [statusColor, setStatusColor] = useState("blue");
  const { state } = useContext<any>(Store);
  useEffect(() => {
    (async () => {
      const rs = await new Users().getUserProfile();
      console.log("Profile", rs);
      const rIndex = REGIONS.findIndex((r) => r[0] == rs.region);
      rs.region = rs.region?.length > 0 ? REGIONS[rIndex][1] : "";
      const pIndex = PRIVACY.findIndex((r) => r[0] == rs.privacy_level);
      rs.privacy_level = PRIVACY[pIndex][1];
      setProfileData(rs);
    })();
  }, []);

  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header mt-6">
            <h3 className="page-title ">Profile</h3>
          </div>
          {/* End page-header */}
          <div className="row ">
            <div className="col-md-3 ">
              <div className="userpic mb-4">
                <img
                  src={
                    profileData.image
                      ? profileData.image
                      : "/assets/images/Profile_Icon.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="text-center">
                {/* <Link href="/editprofile"> */}
                <a
                  onClick={() => (window.location.pathname = "/editprofile")}
                  className="btn btn-primary btn-block mt-1"
                  style={{
                    borderRadius: "10px",
                    width: "200px",
                    backgroundColor: "#3964fc",
                    color: "#FFF",
                  }}
                >
                  Edit Information
                </a>
                {/* </Link> */}
                <br />
              </div>
            </div>
            <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12">
              {/* <div className="card-body"> */}
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Name</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={profileData?.name ? profileData.name : ""}
                      readOnly
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.user
                          ? profileData.user.email
                          : state.emailaddress
                      }
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Phone Number</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.phone_number
                          ? profileData.phone_number
                          : ""
                      }
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label
                      style={{ fontWeight: "bolder" }}
                      htmlFor="form-label"
                    >
                      Date of Birth
                    </label>
                    <div className="form-group">
                      <div className="input-group-date">
                        <input
                          type="text"
                          id="dob"
                          className="form-control form-rounded"
                          defaultValue={
                            profileData?.birthday ? profileData.birthday : ""
                          }
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>
                      Privacy Level
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.privacy_level
                          ? profileData.privacy_level
                          : ""
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-md-12">
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Gender</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.gender
                          ? profileData.gender === "m"
                            ? "Male"
                            : profileData.gender === "f"
                            ? "Female"
                            : ""
                          : ""
                      }
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Town</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.street_address
                          ? profileData.street_address
                          : ""
                      }
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>Region</label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.region ? profileData.region : ""
                      }
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bolder" }}>
                      Digital Address
                    </label>
                    <input
                      type="text"
                      className="form-control form-rounded"
                      defaultValue={
                        profileData?.gps_location
                          ? profileData.gps_location
                          : ""
                      }
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
