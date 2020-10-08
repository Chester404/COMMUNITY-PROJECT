import MainLayout from "../components/MainLayout";
import UserProfilePopup from "../components/UserProfilePopup";
import { Users } from "../lib/endpoints";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Store } from "../contextStore";
import { Console } from "console";
import Link from "next/link";
const disabled = {};

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

export default function Home() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(30);
  const [order, setOrder] = useState(false);
  const [userProfile, setUserProfile] = useState();
  const [readyPopupData, setReadyPopupData] = useState(false);
  const [togglelist, setTogglelist] = useState(true);
  const [torender, setTorender] = useState("");
  const [dropdown, setDropdown] = useState("");
  // const [rs, setRs] = useState([]);
  const [title, setTitle] = useState("Organizations");
  const { state } = useContext(Store);
  const router = useRouter();

  const getUserDetails = async (id, uprofile) => {
    console.log("inside details:");
    setReadyPopupData(false);
    let rs = await new Users().getUserAccountDetails(id);
    console.log("RES:", rs);
    // check privacy
    setReadyPopupData(true);
  };
  const handleOpenIndividualOrganization = (id) => {
    router.push("/individualorganizationprofile");
  };

  useEffect(() => {
    (async () => {
      let rs = null;
      if (state.userProfile.name == undefined) {
        if (togglelist)
          rs = await new Users().getOrganizationProfilesForAdmin();
        else rs = await new Users().getUnregisteredUsersProfile();
      } else {
        console.log("Wrong call");
        rs = await new Users().getProfiles();
      }
      if (rs.error) return;

      // setRs(rs);
      // console.log("rs:", rs.slice(0, recordsPerPage));
      // let temp = rs.filter((uprofile: any) => {
      //   return uprofile.user.is_organization === togglelist;
      // // });
      setTempList(rs);
      try {
        setUserProfiles(rs.slice(0, recordsPerPage));
      } catch (e) {
        console.log("Error", e);
      }
      settotalRecords(rs.length);
    })();
  }, [togglelist]);

  useEffect(() => {
    setUserProfile(JSON.parse(window.localStorage.getItem("user-profile")));
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
      return p.city ? p.city
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase()): null;
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
  const toggleIndividual = () => {
    setTogglelist(false);
    setTitle("Individuals");
    setTorender("Individuals");
    setDropdown("dropdown");
  };
  const toggleOrganization = () => {
    setTogglelist(true);
    setTitle("Organizations");
    setTorender("Organizations");
    setDropdown(null);
  };
  return (
    <>
      <MainLayout>
        <div>
          {/* page-header */}
          <div className="page-header">
            <h1 className="page-title">Member List</h1>
            <div className="ml-auto">
              <div className="inner-addon right-addon">
                <i className="fe fe-search fa-lg" />
                <input
                  id="searchmember"
                  className="form-control form-rounded"
                  type="text"
                  placeholder="Search..."
                  onChange={searchLocation}
                />
              </div>
            </div>
          </div>
          {/* End page-header */}
          <div className="table-responsive tabledt">
            <div className="row">
              <h5
                className="mt-4 mb-3 ml-5 table-title"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  marginLeft: "38px !important",
                }}
                id="toggle-title"
              >
                Market Circle {title}
              </h5>

              <div className="ml-auto">
                <div className="dropdown">
                  <a
                    className="nav-link pr-0 leading-none d-flex pt-1"
                    data-toggle="dropdown"
                  >
                    <div className="mt-3 mb-3 mr-5 table-title">
                      <span
                        style={{
                          color: "#3f3d56",
                          fontSize: "13px",
                          marginRight: "20px",
                        }}
                      >
                        Toggle List
                        <i className="fe fe-list fa-lg ml-1" />
                      </span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a
                      className="dropdown-item header-item-style"
                      id="display-individuals"
                      onClick={toggleIndividual}
                    >
                      Market Circle Individuals
                    </a>
                    <a
                      className="dropdown-item header-item-style"
                      id="display-organizations"
                      onClick={toggleOrganization}
                    >
                      Market Circle Organizations
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
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
                    Location
                  </th>
                  {togglelist ? null : (
                    <>
                      <th scope="col" className="text-muted">
                        Actions
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {userProfiles.map((uprofile: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="dropdown ddmargin">
                          <a
                            className="nav-link"
                            data-toggle={dropdown}
                            onClick={(e) => {
                              console.log("E:", e);
                              if (title === "Individuals") {
                                setTorender("Individuals");
                                setDropdown("dropdown");
                              } else if (title === "Organizations") {
                                setTorender("Organizations");
                                router.push({
                                  pathname: "/businessprofiledetails",
                                  query: { pid: uprofile.user.id },
                                });
                              }
                              getUserDetails(uprofile.user.id, uprofile);
                            }}
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
                            {title === "Individuals" && uprofile.name === "" ? (
                              <span className="ml-5 bolder-text" id="memberid">
                                No name
                              </span>
                            ) : title === "Individuals" &&
                              uprofile.name !== "" ? (
                              <span className="ml-5 bolder-text " id="memberid">
                                {uprofile.name}
                              </span>
                            ) : title === "Organizations" &&
                              uprofile.title === null ? (
                              <span className="ml-5 bolder-text" id="memberid">
                                No title
                              </span>
                            ) : title === "Organizations" &&
                              uprofile.title !== null ? (
                              <span className="ml-5 bolder-text" id="memberid">
                                {uprofile.title}
                              </span>
                            ) : null}
                          </a>
                          {
                            <UserProfilePopup
                              title={torender}
                              loggedIn={userProfile}
                              uprofile={uprofile}
                              isReady={readyPopupData}
                            />
                          }
                        </div>{" "}
                      </td>
                      <td>
                        {title === "Individuals" &&
                        uprofile.street_address === "" ? (
                          <p className="mt-3">No location</p>
                        ) : title === "Individuals" &&
                          uprofile.street_address !== "" ? (
                          <p className="mt-3">{uprofile.street_address}</p>
                        ) : title === "Organizations" &&
                          uprofile.city === null ? (
                          <p className="mt-3">No location</p>
                        ) : title === "Organizations" &&
                        uprofile.city !== null ? (
                          <p className="mt-3">{uprofile.city}</p>
                        ) : null}
                      </td>
                      {togglelist ? null : (
                        <>
                          <td>
                            <p className="mt-2">
                              <i className="fe fe-alert-octagon large" />
                              <i className="fe fe-heart ml-1 large" />
                            </p>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>{" "}
            </table>
            <div
              className="row"
              style={{ margin: "10px", background: "#ffffff" }}
            >
              {/* <div className="col-md-5">
                <label>
                  Showing
                  <select
                    className="ml-3"
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
              </div> */}
              <Pagination
                callback={paginate}
                totalRecords={totalRecords}
                recordsPerpage={recordsPerPage}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
