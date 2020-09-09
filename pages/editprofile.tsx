import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Edit Profile</h1>
          </div>
          {/* End page-header */}
          <div className="row">
            <div className="col-md-3">
              <div className="userpic mb-4">
                <div className="profile-pic">
                  <img src="assets/images/img.jpg" />
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
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter first name"
                        defaultValue="Lois Ewurama"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter last name"
                        defaultValue="Young"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Email Address"
                        defaultValue="loisewuramayoung@gmail.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Email Address"
                        defaultValue="+233 24 678 9560"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date of Birth</label>
                      <div className="input-group">
                        <input
                          type="text"
                          id="dob"
                          className="form-control form-rounded"
                          placeholder="Date of Birth"
                          defaultValue="10 Oct 1993"
                        />
                        <span className="input-group-append">
                          <button
                            className="btn btn-transparent"
                            type="button"
                            style={{
                              borderBottomRightRadius: "12px",
                              borderTopRightRadius: "12px",
                            }}
                          >
                            <i
                              className="fe fe-calendar fa-lg"
                              style={{
                                background: "#FFFFFF !important",
                                color: "#000000",
                              }}
                            />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Gender</label>
                      <select className="form-control select2 form-rounded">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Street Address</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Street Address"
                        defaultValue="Executive Avenue, Anaji"
                      />
                    </div>
                    <div className="form-group">
                      <label>Region</label>
                      <select className="form-control select2 form-rounded">
                        <option value="Western Region">Western Region</option>
                        <option value={2}>Option 2</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Digital Address</label>
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Digital Address"
                        defaultValue="AK-039-5028"
                      />
                    </div>
                    <div className="form-group">
                      <label>Private Level</label>
                      <select className="form-control select2 form-rounded">
                        <option value="Registered Business Only">
                          Registered Business Only
                        </option>
                        <option value={2}>Option 2</option>
                      </select>
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
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn ml-5 btn-lg mb-1 mt-5"
                      style={{
                        background: "#818AA9 !important",
                        width: "160px !important",
                        color: "#ffffff !important",
                        borderRadius: "20px !important",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              `
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
