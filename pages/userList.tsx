import React, { useContext } from "react";
import MainLayout from "../components/MainLayout";
import AdminSidebar from "../components/admin-sidebar";
import { Users } from "../lib/endpoints";
import { useEffect, useState } from "react";
import { Store } from "../contextStore";

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
  const [orglist, setOrglist] = useState([]);
  const [temporgprofile, setTemporgprofile] = useState([]);
  const [approverender, setApproverender] = useState<any>();

  const { state } = useContext(Store);
  const [list, setList] = useState("inital");
  const [title, setTitle] = useState("Activated Users");

  const getUserDetails = async (id) => {
    let rs = await new Users().getUserAccountDetails(id);
  };

  const individuals = (rs) => {
    try {
      return rs.filter((uprofile: any) => {
        return (
          uprofile.user.is_staff === false &&
          uprofile.user.is_organization === false &&
          uprofile.user.email !== state.userProfile.user.email
        );
      });
    } catch (e) {}
  };

  const organizations = (rs) => {
    return rs.filter((uprofile: any) => {
      return (
        uprofile.user.is_staff === false &&
        uprofile.user.is_organization === true &&
        uprofile.user.email !== state.userProfile.user.email
      );
    });
  };

  // const getActiveIndividuals = (rs)

  useEffect(() => {
    (async () => {
      const rs = await new Users().getIndividualProfilesForAdmin();
      const orgs = await new Users().getOrganizationProfilesForAdmin();
      setTempprofile(rs);
      setTemporgprofile(orgs);
      const temp_active_inactive = individuals(rs);
      setTempList(temp_active_inactive);
      setUserProfiles(temp_active_inactive.slice(0, recordsPerPage));
      settotalRecords(temp_active_inactive.length);
    })();
  }, []);

  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
    const ts = tempList.slice(start - 1, end - 1);
    setUserProfiles(ts);
  };

  const searchLocation = (e: any) => {
    console.log("E:", e);
    const ts = tempList.filter((p) => {
      return (
        p.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase()) ||
        p.user.email
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase()) ||
        p.user.phone_number
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase()) ||
        p.street_address
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
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

  const approve = async (id) => {
    // const temp = tempprofile.map((tmp, i) => {
    //   if (tmp.user.id === id) {
    //     tmp.user.is_active = true;
    //   }
    //   return tmp;
    // });
    // setTempprofile(temp);
    let rs = await new Users().activateDeactivate({
      pk: id,
      active: true,
    });

    console.log("RS:", rs);
    // setApproverender(true);
    // setCheckedUsers([...checkedUsers, uprofile.user.id]);
  };

  const disapprove = async (id) => {
    let rs = await new Users().activateDeactivate({
      pk: id,
      active: false,
    });

    console.log("RS:", rs);
    // setApproverender(true);
  };

  // useEffect(() => {}, [approverender]);

  const activateDeactivate = async () => {
    let active: any;
    if (list === "individuals" || list === "organizations") {
      active = false;
    } else if (
      list === "deactivated_users" ||
      list === "deactivated_organizations"
    ) {
      active = true;
    }
    for (let i = 0; i < checkedUsers.length; i++) {
      let rs = await new Users().activateDeactivate({
        pk: checkedUsers[i],
        active,
      });
    }
    handleList(list);
  };

  const handleList = (str) => {
    setList(str);
    setCheckuser(false);

    let temp: any;
    switch (str) {
      case "individuals":
        console.log("heye", individuals);
        temp = individuals(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_active === true;
        });
        setTitle("Activated Users");

        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "organizations":
        temp = organizations(temporgprofile).filter((uprofile: any) => {
          return uprofile.user.is_active === true;
        });
        setTitle("Organizations List");
        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "deactivated_users":
        temp = individuals(tempprofile).filter((uprofile: any) => {
          return uprofile.user.is_active === false;
        });
        setTitle("Deactivated Users");
        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "organizationalrequests":
        temp = organizations(temporgprofile).filter((uprofile: any) => {
          return uprofile.user.is_active === true;
        });
        setTitle("Organizational Requests");
        setUserProfiles(temp.slice(0, recordsPerPage));
        settotalRecords(temp.length);
        break;
      case "deactivated_organizations":
        temp = organizations(temporgprofile).filter((uprofile: any) => {
          return uprofile.user.is_active === false;
        });
        setTitle("Deactivated Organizations");
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
                className="form-control form-rounded searchbox-width"
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
              {title}
            </h5>
            <div className="ml-auto">
              <div className="dropdown">
                <a
                  className="nav-link pr-0 leading-none d-flex pt-1"
                  onClick={activateDeactivate}
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
                          <button className="btn btn-primary activate-btn">
                            Deactivate
                          </button>
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
                  {/* <input type="checkbox" className=" mr-2 ml-3"></input> */}
                  <div className="dropdown">
                    <span id="toggle-sort">
                      <span className="" style={{ marginLeft: 77 }}>
                        Name{" "}
                      </span>
                      <i
                        className={`fa fa-sort-amount-${
                          order ? "asc" : "desc"
                        }`}
                        onClick={() => showsort()}
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
                    <th scope="col" align="center" className="text-muted">
                      Requests
                    </th>
                  </>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {userProfiles.map((uprofile: any, index: number) => {
                // setApproverender(prev => prev = uprofile.user.isactive);
                // console.log("UPROFILE:", uprofile);
                return (
                  <tr key={index}>
                    <td scope="col" className="text-muted">
                      <div className="form-check">
                        {list !== "inital" ? (
                          <input
                            style={{ marginTop: 17 }}
                            type="checkbox"
                            name="check_user"
                            className="form-check-input"
                            id={uprofile.id}
                            value={uprofile.name}
                            onChange={(e) => {
                              if (
                                list === "individuals" ||
                                list === "deactivated_users"
                              ) {
                                const temp = tempprofile.map((tmp, i) => {
                                  if (tmp.user.id === uprofile.user.id) {
                                    tmp.user.is_active = !e.target.checked;
                                  }
                                  return tmp;
                                });
                                setTempprofile(temp);
                              } else {
                                const temp = temporgprofile.map((tmp, i) => {
                                  if (tmp.user.id === uprofile.user.id) {
                                    tmp.user.is_active = e.target.checked;
                                  }
                                  return tmp;
                                });
                                setTemporgprofile(temp);
                              }
                              setCheckedUsers([
                                ...checkedUsers,
                                uprofile.user.id,
                              ]);
                            }}
                          />
                        ) : null}
                      </div>
                    </td>
                    <td>
                      <div className="dropdown ddmargin">
                        <a
                          className="nav-link"
                          // data-toggle="dropdown"
                          // onClick={() => getUserDetails(uprofile.id)}
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
                          <span
                            className="ml-5 column-color"
                            id="memberid"
                            style={{ marginLeft: 23 }}
                          >
                            {uprofile.name && uprofile.name !== null
                              ? uprofile.name
                              : uprofile.title && uprofile.title !== ""
                              ? uprofile.title
                              : "No name"}
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
                      <p className="mt-2">
                        {uprofile.phone_number && uprofile.phone_number !== ""
                          ? uprofile.phone_number
                          : uprofile.user.phone_number &&
                            uprofile.user.phone_number !== ""
                          ? uprofile.user.phone_number
                          : "No phone number"}
                      </p>
                    </td>
                    <td>
                      <p className="mt-2">
                        {uprofile.street_address &&
                        uprofile.street_address !== ""
                          ? uprofile.street_address
                          : uprofile.city && uprofile.city !== ""
                          ? uprofile.city
                          : "No town specified"}
                      </p>
                    </td>

                    {list === "organizationalrequests" ? (
                      <>
                        <td>
                          <>
                            {" "}
                            <button
                              style={{ marginTop: 7 }}
                              disabled={uprofile.user.is_active}
                              className="btn btn-success mr-2 requestbtn"
                              onClick={() => {
                                approve(uprofile.user.id);
                                const temp = temporgprofile.map((tmp, i) => {
                                  if (tmp.user.id === uprofile.user.id) {
                                    tmp.user.is_active = !uprofile.user
                                      .is_active;
                                  }
                                  return tmp;
                                });
                                setTemporgprofile(temp);
                              }}
                            >
                              Approve
                            </button>
                            <button
                              style={{ marginTop: 7 }}
                              disabled={!uprofile.user.is_active}
                              className="btn btn-danger mr-2 requestbtn"
                              onClick={() => {
                                disapprove(uprofile.user.id);
                                const temp = temporgprofile.map((tmp, i) => {
                                  if (tmp.user.id === uprofile.user.id) {
                                    tmp.user.is_active = !uprofile.user
                                      .is_active;
                                  }
                                  return tmp;
                                });
                                setTemporgprofile(temp);
                              }}
                            >
                              Disapprove
                            </button>{" "}
                          </>
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

function showsort() {
  var toggle = document.getElementById("sortlist");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}
