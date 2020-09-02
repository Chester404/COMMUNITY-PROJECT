import Layout from "../../components/Layout";
import Head from "next/head";

function profileList() {
  return (
    <Layout title="Profile List View">
      <Head>
        <link rel="stylesheet" href="/css/profiles.css" />
      </Head>
      <div className="container">
        <div className="col">
          <div className="row mt-2 mb-2">
            <div className="col">Member List</div>
            <div className="col">
              <form className="form-inline my-2 my-lg-0 search-box">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search by location"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <span className="info-icon mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage2.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Ebenezer Skyler</h6>
                      </div>
                    </th>
                    <td>Effiakuma, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Kristine Wonder</h6>
                      </div>
                    </th>
                    <td>Beach Road, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage2.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="row">
                        <img
                          src="../images/profileImage1.png"
                          className="rounded-circle mr-3"
                          alt="profile pic"
                        />
                        <h6 className="username mt-2">Godsway Hadson</h6>
                      </div>
                    </th>
                    <td>Anaji, Takoradi</td>
                    <td>
                      <button className="">info</button>
                      <button className="">heart</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default profileList;
