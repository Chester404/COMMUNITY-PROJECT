import MainLayout from "../components/MainLayout";
import { Users } from "../lib/endpoints";
import { useEffect, useState } from "react";

export default function Home() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const rs = await new Users().getProfiles();
      console.log(rs);
      setUserProfiles(rs);
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Member List</h1>
            <div className="ml-auto">
              <div className="input-group">
                <input
                  className="form-control border-right-0 form-rounded"
                  type="text"
                  placeholder="Search..."
                />
                <span
                  className="input-group-append bg-white border-left-0"
                  style={{
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                  }}
                >
                  <span className="input-group-text bg-transparent">
                    <i className="fe fe-search fa-lg" />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* End page-header */}
          <div className="card">
            <div className="card-body">
              <h4>Market Circle Individuals</h4>
              {isLoading ? (
                <h3>Loading user list ...</h3>
              ) : !userProfiles[0] ? (
                <h3>No user list available.</h3>
              ) : (
                <div className="table-responsive table-lg">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userProfiles.map((user: any) => {
                        const image_link = user.image
                          ? user.image
                          : "/assets/images/Profile_Icon.png";
                        return (
                          <tr key={user.id}>
                            <td>
                              <img
                                src={image_link}
                                className="brround"
                                alt=""
                                style={{ width: "40px", height: "40px" }}
                              />
                              <span className="ml-5">
                                {user.first_name + " " + user.last_name}
                              </span>
                            </td>
                            <td>
                              <p className="mt-2">{user.street_address}</p>
                            </td>
                            <td>
                              <p className="mt-2">
                                <i
                                  className="fe fe-alert-octagon"
                                  style={{ fontSize: "large" }}
                                />
                                <i
                                  className="fe fe-heart ml-1"
                                  style={{ fontSize: "large" }}
                                />
                              </p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="row">
                <div className="col-md-5">
                  <label>
                    Showing
                    <select
                      className="ml-3"
                      disabled
                      style={{
                        height: "30px !important",
                        borderRadius: "6px",
                      }}
                    >
                      <option>10</option>
                      <option>25</option>
                      <option selected>30</option>
                      <option>50</option>
                      <option>100</option>
                    </select>{" "}
                    entries
                  </label>
                </div>
                <div className="col-md-7">
                  <div
                    className="pagination ml-auto"
                    style={{ float: "right" }}
                  >
                    <a href="#" className="disabled">
                      «
                    </a>
                    <a href="#" className="active disabled">
                      1
                    </a>
                    {/* <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a> */}
                    <a href="#" className="disabled">
                      »
                    </a>
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
