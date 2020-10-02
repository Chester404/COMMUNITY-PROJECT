import React from "react";
import MainLayout from "../components/MainLayout";
import AdminSidebar from "../components/admin-sidebar";
import { Users } from "../lib/endpoints";
import { useEffect, useState } from "react";

interface IPaginateProps {
  callback(i: number): void;
  recordsPerpage: number;
  totalRecords: number;
}

const Pagination = ({
  callback,
  recordsPerpage,
  totalRecords,
}: IPaginateProps) => {
  const [iter, setIter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const tr = Math.ceil(totalRecords / recordsPerpage);
    if (tr > 0) setIter(Array(tr).fill(0));
  }, [totalRecords]);
  return (
    <div className="col-md-12">
      <div className="pagination ml-auto" style={{ float: "right" }}>
        <a
          href="#"
          onClick={() => {
            if (currentPage != 1) {
              callback(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
          style={
            currentPage == 1 ? { color: "gray", pointerEvents: "none" } : null
          }
        >
          « Prev
        </a>
        {iter.map((_, index: number) => {
          return (
            <a
              key={index}
              href="#"
              onClick={() => {
                setCurrentPage(index + 1);
                callback(index + 1);
              }}
              className={currentPage == index + 1 ? "active" : ""}
            >
              {index + 1}
            </a>
          );
        })}
        <a
          href="#"
          onClick={() => {
            if (currentPage < Math.ceil(totalRecords / recordsPerpage)) {
              callback(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }
          }}
          style={
            currentPage >= Math.ceil(totalRecords / recordsPerpage)
              ? { color: "gray", pointerEvents: "none" }
              : null
          }
        >
          Next »
        </a>
      </div>
    </div>
  );
};

export default function userList() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [tempprofile, setTempprofile] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(30);
  const [order, setOrder] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [checkuser, setCheckuser] = useState(false);
  const [activate, setActivate] = useState(false);

  const [list, setList] = useState("individuals");

  const getUserDetails = async (id) => {
    let rs = await new Users().getUserAccountDetails(id);
  };

  const individuals = (rs) => {
    return rs.filter((uprofile: any) => {
      return uprofile.user.is_organization === false;
    });
  };

  const organizations = (rs) => {
    return rs.filter((uprofile: any) => {
      return uprofile.user.is_organization === true;
    });
  };

  useEffect(() => {
    (async () => {
      const rs = await new Users().getProfilesForAdmin();
      setTempprofile(rs);
      const temp_active_inactive = individuals(rs);
      setTempList(temp_active_inactive);
      setUserProfiles(temp_active_inactive.slice(0, recordsPerPage));
      settotalRecords(temp_active_inactive.length);
    })();
  }, []);

  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
    console.log(start, end);
    const ts = tempList.slice(start - 1, end - 1);
    setUserProfiles(ts);
  };

  const searchLocation = (e: any) => {
    const ts = tempList.filter((p) => {
      return p.street_address
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setUserProfiles(ts);
  };
  const sortByName = () => {
    if (order === true) {
      setOrder(false);
    } else if (order === false) {
      setOrder(true);
    }
    const sorted = [...userProfiles];
    setUserProfiles([...sorted].reverse());
  };

  const activate_ = async () => {
    let temp_profile = tempprofile;
    for (let i = 0; i < checkedUsers.length; i++) {
      let rs = await new Users().activateDeactivate({
        pk: checkedUsers[i],
        activate: true,
      });

      temp_profile = temp_profile.map((uprofile) => {
        if (uprofile.id === checkedUsers[i]) {
          uprofile.user.is_activated = !uprofile.user.is_activated;
        }
        return uprofile;
      });
    }
    setTempprofile(temp_profile);
    setCheckuser(false);
    handleList(list);
  };

  const deactivate_ = async () => {
    let temp_profile = tempprofile;
    for (let i = 0; i < checkedUsers.length; i++) {
      let rs = await new Users().activateDeactivate({
        pk: checkedUsers[i],
        activate: false,
      });

      temp_profile = temp_profile.map((uprofile) => {
        if (uprofile.id === checkedUsers[i]) {
          uprofile.user.is_activated = !uprofile.user.is_activated;
        }
        return uprofile;
      });
    }
    setTempprofile(temp_profile);
    setCheckuser(false);
    handleList(list);
  };
  const activateDeactivate = async () => {
    if (list === "individuals" || list === "organizations") {
      setActivate(false);
    } else if (
      list === "deactivated_users" ||
      list === "deactivated_organizations"
    ) {
      setActivate(true);
    }

    let temp_profile = tempprofile;
    for (let i = 0; i < checkedUsers.length; i++) {
      let rs = await new Users().activateDeactivate({
        pk: checkedUsers[i],
        activate,
      });

      temp_profile = temp_profile.map((uprofile) => {
        if (uprofile.id === checkedUsers[i]) {
          uprofile.user.is_activated = !uprofile.user.is_activated;
        }
        return uprofile;
      });
    }

    setTempprofile(temp_profile);
    setCheckuser(false);
    handleList(list);
  };

  const handleList = (str) => {
    console.log(str);
    setList(str);
    setCheckuser(false);

    let temp;
    switch (str) {
      case "individuals":
        console.log("individuals");
        temp = individuals(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_activated === true;
        });

        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "organizations":
        temp = organizations(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_activated === true;
        });

        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "deactivated_users":
        temp = individuals(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_activated === false;
        });
        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        console.log("deactivated_users");
        break;
      case "organizationalrequests":
        temp = organizations(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_activated === true;
        });

        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "deactivated_organizations":
        temp = organizations(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_activated === false;
        });

        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      default:
        return;
    }
  };

  return (
    <MainLayout>
      <AdminSidebar handleList={handleList} />
      <div>
        <i
          className="fa fa-chevron-circle-right openicon mr-5"
          id="openicon"
          onClick={() => openNav()}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      </div>
      <div id="main">
        <div className="page-header">
          <h1 className="page-title page-title-userlist" id="page-title">
            User List
          </h1>

          <div className="mt-0 row">
            <div className="inner-addon right-addon mr-2">
              <i className="fe fe-search fa-lg" />
              <input
                id="searchmember"
                className="form-control form-rounded"
                type="text"
                placeholder="Search..."
                onChange={searchLocation}
              />
            </div>
            <div>
              <button className="btn btn-primary add-user-btn">
                <i className="fe fe-plus" /> Add User
              </button>
            </div>
          </div>
        </div>

        {/* End page-header */}
        <div className="table-responsive tabledt">
          <div className="row ">
            <h5
              className="mt-4 mb-3 ml-5 table-title"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                marginLeft: "38px !important",
              }}
              id="toggle-title"
            >
              {list === "individuals" ? (
                <>Activated Users</>
              ) : list === "organizations" ? (
                <>Activated Organizations</>
              ) : list === "deactivated_users" ? (
                <>Deactivated Users</>
              ) : list === "deactivated_organizations" ? (
                <>Deactivated Organizations</>
              ) : list === "organizationalrequests" ? (
                <>Organizational Requests</>
              ) : null}
            </h5>
            <div className="ml-auto">
              <div className="dropdown">
                <a
                  className="nav-link pr-0 leading-none d-flex pt-1"
                  onClick={() => activateDeactivate}
                >
                  <div className="mt-3 mb-3 mr-5 table-title">
                    <span
                      style={{
                        color: "#3f3d56",
                        fontSize: "13px",
                        marginRight: "20px",
                      }}
                    >
                      {list === "individuals" || list === "organizations" ? (
                        <>
                          Deactivate <i className="fa fa-lock fa-lg ml-1" />
                        </>
                      ) : list === "deactivated_users" ||
                        list === "deactivated_organizations" ? (
                        <>
                          Activate <i className="fa fa-unlock-alt fa-lg ml-1" />
                        </>
                      ) : null}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-muted">
                  <div className="form-check"></div>
                </th>

                <th scope="col" className="text-muted ml-5">
                  <div className="dropdown">
                    <span id="toggle-sort">
                      <span className="ml-3">Name </span>
                      <i
                        className={`fa fa-sort-amount-${
                          order ? "asc" : "desc"
                        }`}
                      ></i>
                    </span>
                    <div className="dropdown-content ml-8">
                      <div>
                        <div className="ml-2 mt-3">
                          <span>Sort by</span>
                        </div>
                        <div className="ml-2 mt-3 tbtheadcolor">
                          <span onClick={sortByName} id="sort-by-name">
                            Name (A-Z)
                          </span>
                        </div>
                        <div className="ml-2 mt-3 mb-2 tbtheadcolor">
                          <span id="sort-by-location">Location</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>

                {list !== "organizationalrequests" ? (
                  <>
                    <th scope="col" className="text-muted">
                      Email
                    </th>
                  </>
                ) : null}

                <th scope="col" className="text-muted">
                  Telephone
                </th>
                <th scope="col" className="text-muted">
                  Town
                </th>

                {list === "organizationalrequests" ? (
                  <>
                    <th scope="col" className="text-muted">
                      Requests
                    </th>
                  </>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {console.log("uprofiles:", userProfiles)}
              {userProfiles.map((uprofile: any, index: number) => {
                return (
                  <tr key={index}>
                    <td scope="col" className="text-muted">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="check_user"
                          className="form-check-input"
                          id={uprofile.id}
                          value={uprofile.name}
                          onClick={(e) => setCheckuser(true)}
                          onChange={(e) => {
                            e.target.checked === checkuser;
                            setCheckedUsers([...checkedUsers, uprofile.id]);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="dropdown ddmargin">
                        <a
                          className="nav-link"
                          data-toggle="dropdown"
                          onClick={() => getUserDetails(uprofile.id)}
                        >
                          <span
                            className="avatar avatar-md brround cover-image"
                            data-image-src="/images/blank_avatar.jpeg"
                          ></span>

                          <img
                            src={
                              uprofile.image
                                ? uprofile.image
                                : "/assets/images/Profile_Icon.png"
                            }
                            className="brround ddimg"
                            alt=""
                          />
                          <span className="ml-5 column-color" id="memberid">
                            {uprofile.name}
                          </span>
                        </a>
                      </div>{" "}
                    </td>

                    {list !== "organizationalrequests" ? (
                      <>
                        <td>
                          <p className="mt-2">{uprofile.user.email}</p>
                        </td>
                      </>
                    ) : null}

                    <td>
                      <p className="mt-2">{uprofile.phone_number}</p>
                    </td>
                    <td>
                      <p className="mt-2">{uprofile.street_address}</p>
                    </td>

                    {list === "organizationalrequests" ? (
                      <>
                        <td>
                          <button
                            className="btn btn-success mr-2 requestbtn"
                            onClick={deactivate_}
                          >
                            Approve
                          </button>
                          <button
                            className="btn btn-danger mr-2 requestbtn"
                            onClick={activate_}
                          >
                            Disapprove
                          </button>
                        </td>
                      </>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>{" "}
          </table>

          <div
            className="row"
            style={{ margin: "10px", background: "#ffffff" }}
          >
            <Pagination
              callback={paginate}
              totalRecords={totalRecords}
              recordsPerpage={recordsPerPage}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ margin: "10px", background: "#ffffff" }}
        ></div>
      </div>
    </MainLayout>
  );
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "220px";
  document.getElementById("openicon").style.display = "none";
}
