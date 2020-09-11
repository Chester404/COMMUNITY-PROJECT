import MainLayout from "../components/MainLayout";
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
  const [recordsPerPage] = useState(5);
  // const [isLoading, setIsLoading] = useState(true);
  // const [sorted, setSorted] = useState(false);

  useEffect(() => {
    (async () => {
      const rs = await new Users().getProfiles();
      setTempList([...rs]);
      setUserProfiles(rs.slice(0, recordsPerPage));
      // setIsLoading(false);
      settotalRecords(rs.length);
    })();
  }, []);

  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
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
                  id="searchmember"
                  className="form-control border-right-0 form-rounded"
                  type="text"
                  placeholder="Search..."
                  onChange={searchLocation}
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
          <div
            className="table-responsive table-lg"
            style={{ background: "#ffffff", marginBottom: "30px" }}
          >
            <h5 className="mt-5 mb-5 ml-5 table-title">
              Market Circle Individuals
            </h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-muted ml-5">
                    <span className="ml-3">Name </span>
                    <i
                      className="fe fe-align-left"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </th>
                  <th scope="col" className="text-muted">
                    Location
                  </th>
                  <th scope="col" className="text-muted">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {userProfiles.map((uprofile: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="dropdown">
                          <img
                            src={
                              uprofile.image
                                ? uprofile.image
                                : "/assets/images/Profile_Icon.png"
                            }
                            className="brround ml-3"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                          <span className="ml-5 column-color" id="memberid">
                            {uprofile.name}
                          </span>
                          <div className="dropdown-content">
                            <div>
                              <div className="drop-heading">
                                <img
                                  src={
                                    uprofile.image
                                      ? uprofile.image
                                      : "/assets/images/Profile_Icon.png"
                                  }
                                  className="brround"
                                  alt=""
                                  style={{ width: "40px", height: "40px" }}
                                />
                                <span className="ml-2">{uprofile.name}</span>
                              </div>
                              <div className="dropdown-divider m-0" />
                              <div className="ml-3 mr-3 mt-5 mb-5">
                                <p>
                                  <b>Telephone:</b>
                                  <span style={{ float: "right" }}>
                                    {uprofile.phone_number}
                                  </span>
                                </p>
                                <p>
                                  <b>Email:</b>
                                  <span style={{ float: "right" }}>
                                    {uprofile.user.email}
                                  </span>
                                </p>
                                <p>
                                  <b>Street Address:</b>
                                  <span
                                    style={{
                                      float: "right",
                                      textAlign: "right",
                                    }}
                                  >
                                    {uprofile.street_address}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </td>
                      <td>
                        <p className="mt-2">{uprofile.street_address}</p>
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
