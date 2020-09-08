import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Profile</h1>
          </div>
          {/* End page-header */}
          <div className="row">
            <div className="col-md-3">
              <div className="userpic mb-4">
                <img src="assets/images/img.jpg" alt="" />
              </div>
              <div className="text-center">
                <a
                  href="editprofile.html"
                  className="btn btn-primary btn-block mt-1"
                  style={{ borderRadius: "12px" }}
                >
                  Edit Profile
                </a>
                <br />
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
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Gender"
                        defaultValue="Male"
                      />
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
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Region"
                        defaultValue="Western Region"
                      />
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
                      <input
                        type="text"
                        className="form-control form-rounded"
                        placeholder="Enter Level"
                        defaultValue="Registered Business Only"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
