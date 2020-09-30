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
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(30);
  const [order, setOrder] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [listview, setListview] = useState("active");
  // const [userActive,setActivateUser] = useState(null)
  // const [userProfile, setUserProfile] = useState();
  // const [readyPopupData, setReadyPopupData] = useState(false);
  const [list, setList] = useState("individual");

  const getUserDetails = async (id) => {
    // setReadyPopupData(false);
    let rs = await new Users().getUserAccountDetails(id);
    console.log("RES:", rs);
    // check privacy
    // setReadyPopupData(true);
  };

  useEffect(() => {
    (async () => {
      const rs = await new Users().getProfilesForAdmin();
      console.log("RS:", rs);
      let temp = rs
        .filter((uprofile: any) => {
          if (listview === "active") {
            return uprofile.user.is_activated === true;
          } else if (listview === "inactive") {
            return uprofile.user.is_activated === false;
          }
        })
        .filter((uprofile: any) => {
          if (list === "individual") {
            return uprofile.is_organization === false;
          } else if (list === "organization") {
            return uprofile.is_organization === true;
          }
        });
      setTempList(temp);
      setUserProfiles(temp.slice(0, recordsPerPage));
      settotalRecords(temp.length);
    })();
  }, [list, listview]);
  // useEffect(() => {
  //   setUserProfile(JSON.parse(window.localStorage.getItem("user-profile")));
  // }, []);
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
  const activateDeactivate = async (listview) => {
    console.log();
    /*
    checkedUsers.map(async (pk) => {
      let rs = await new Users().activateDeactivate({
        pk,
        is_active: listview === "active" ? false : true,
      });
      setIsActive([...isActive, rs]);
    });
    */

    for (let i = 0; i < checkedUsers.length; i++) {
      let current_user = checkedUsers[i];
      console.log("current user", current_user);
      let rs = await new Users().activateDeactivate({
        pk:current_user,
        is_active: listview === "active" ? false : true,
      });
      setIsActive([...isActive, rs]);
      console.log(rs);
    }
  };

  const handleList = (str) => {
    setList(str);
    setListview("active");
  };

  const handleListView = (str) => {
    setListview(str);
  };

  return (
    <MainLayout>
      <AdminSidebar handleList={handleList} handleListView={handleListView} />
      <div id="main">
        <div className="page-header">
          <div>
            <i
              className="fa fa-chevron-circle-right openicon mr-5"
              id="openicon"
              onClick={() => openNav()}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
          {/* <h3 className="userlist" style={{ marginLeft: "-60% !important" }}>
            <b id="opentexticon">User List</b>
          </h3> */}
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
              User List
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
                      {listview === "active" ? (
                        <>
                          Deactivate <i className="fa fa-lock fa-lg ml-1" />
                        </>
                      ) : (
                        <>
                          Activate <i className="fa fa-unlock-alt fa-lg ml-1" />
                        </>
                      )}
                    </span>
                  </div>
                </a>
                {/* <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a
                    className="dropdown-item header-item-style"
                    id="display-individuals"
                    onClick={activateUser}
                  >
                    Activate Users
                  </a>
                  <a
                    className="dropdown-item header-item-style"
                    id="display-organizations"
                    onClick={deactivateUser}
                  >
                    Deactivate Users
                  </a>
                </div> */}
              </div>
            </div>
            {/* <div>
              <button className="btn btn-primary gobtn ml-2">GO</button>
            </div> */}
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-muted">
                  <div className="form-check">
                    {/* <input type="checkbox" className="form-check-input" id="check-all"/> */}
                  </div>
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
                <th scope="col" className="text-muted">
                  Email
                </th>
                <th scope="col" className="text-muted">
                  Telephone
                </th>
                <th scope="col" className="text-muted">
                  Town
                </th>
              </tr>
            </thead>
            <tbody>
              {userProfiles.map((uprofile: any, index: number) => {
                return (
                  <tr key={index}>
                    <td scope="col" className="text-muted">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={uprofile.id}
                          onChange={() => {
                            console.log(checkedUsers);
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
                    <td>
                      <p className="mt-2">{uprofile.user.email}</p>
                    </td>
                    <td>
                      <p className="mt-2">{uprofile.phone_number}</p>
                    </td>
                    <td>
                      <p className="mt-2">{uprofile.street_address}</p>
                    </td>
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
